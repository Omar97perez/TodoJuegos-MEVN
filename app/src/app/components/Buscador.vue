<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Búsqueda de productos</p></strong>
    <div class="col-md-12 pb-3">
    <div class="form-group">
        <label for="sel1">Tipo de producto:</label>
        <select class="form-control" id="product" name="product" v-model="tipo" @click="getProductos" style="height: 40px;">
            <option value="videojuego">Juego</option>
            <option value="consola">Consola</option>
            <option value="accesorio">Accesorios</option>
            <option value="mercha">Merchadising</option>
            <option value="electronica">Electronica</option>
        </select>
    </div>
    </div>
    <div class="col-md-12" v-if="mostrar == true">
      <div class="pb-3">
        <template v-if="tipo == 'videojuego'">
          <label for="Plataformas">Plataformas</label>
          <div class="form-group row">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="plataforma" name="plataformas" id="Pc" value="Pc">
              <label class="form-check-label" for="inlineRadio1">Pc</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="plataforma" name="plataformas" id="PS4" value="Ps4">
              <label class="form-check-label" for="inlineRadio2">PS4</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="plataforma" name="plataformas" id="XboxOne" value="XBoxOne">
              <label class="form-check-label" for="inlineRadio3">Xbox One</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="plataforma" name="plataformas" id="todo" value="" checked>
              <label class="form-check-label" for="inlineRadio4">Todo</label>
            </div>
          </div>

          <label for="Categorias">Categorias</label>
          <div class="form-group row">
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="accion" value="Acción">
              <label class="form-check-label" for="inlineRadio1">Accion</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="aventura" value="Aventura">
              <label class="form-check-label" for="inlineRadio2">Aventura</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="deportes" value="Deportes">
              <label class="form-check-label" for="inlineRadio3">Deportes</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="conduccion" value="Conducción">
              <label class="form-check-label" for="inlineRadio4">Conducción</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="estrategia" value="Estrategia">
              <label class="form-check-label" for="inlineRadio5">Estrategia</label>
            </div>
            <div class="form-check form-check-inline">
              <input class="form-check-input" type="radio" v-model="categoria" name="categoria" id="todo" value="" checked>
              <label class="form-check-label" for="inlineRadio7">Todo</label>
            </div>
          </div>
        </template>
        <input type="text" placeholder="Buscar nombre" class="form-control" name="buscar" value="buscar" v-model="titulo">
      </div>
      <table class="table table-striped">
        <thead style="background-color:#434343;color:#fb6207">
          <tr>
            <th>Producto</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <template v-if="cumple==true">
              <th>Plaforma</th>
              <th>Categoria</th>
            </template>
            <th>Precio</th>
            <th>Oferta</th>
          </tr>
        </thead>
        <tbody >
          <tr v-for="Producto of buscarProducto">
            <td>
              <div class="img-box">
                <img v-bind:src="Producto.foto"  width="150" height="150"></img>
              </div>
            </td>
            <td>{{Producto.titulo}}</td>
            <td>{{Producto.descripcion}}</td>
            <template v-if="cumple==true">
              <td>{{Producto.plataforma}}</td>
              <td>{{Producto.categoria}}</td>
            </template>
            <td>{{Producto.precio}}€</td>
            <td>{{Producto.oferta}}€</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tipo: '',
      Productos: [],
      mostrar: false,
      titulo: '',
      cumple: false,
      plataforma: '',
      categoria: ''
    }
  },
  methods: {
    getProductos() {
      if(this.tipo != '')
        this.mostrar = true;
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data.filter(data => data.tipo == this.tipo);
        });

      if(this.tipo != 'videojuego'){
        this.plataforma = '';
        this.categoria = '';
      }

      if(this.tipo == 'accesorio' || this.tipo == 'videojuego'){
        this.cumple = true;
      }
      else{
        this.cumple = false;
      }
    }
  },
  computed: {
    buscarProducto() {
      return this.Productos.filter(Producto => Producto.titulo.toUpperCase().includes(this.titulo.toUpperCase()) &&
                                               Producto.plataforma.includes(this.plataforma) &&
                                               Producto.categoria.includes(this.categoria));
    }
  }
}
</script>
