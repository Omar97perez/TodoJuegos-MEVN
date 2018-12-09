<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Filtro producto</p></strong>
    <form class="text-left" @submit.prevent="getProductos">
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
      </div>
      <template v-if="plataforma == 'Pc'">
        <label for="Plataformas">Categorias</label>
        <div class="form-group row">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="accion" value="accion">
            <label class="form-check-label" for="inlineRadio1">Accion</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="aventura" value="aventura">
            <label class="form-check-label" for="inlineRadio2">Aventura</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="deportes" value="deportes">
            <label class="form-check-label" for="inlineRadio2">Deportes</label>
          </div>
        </div>
      </template>

      <template v-if="plataforma == 'Ps4'">
        <label for="Plataformas">Categorias</label>
        <div class="form-group row">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="estrategia" value="estrategia">
            <label class="form-check-label" for="inlineRadio2">Estrategia</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="carreras" value="carreras">
            <label class="form-check-label" for="inlineRadio2">Carreras</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="tiros" value="tiros">
            <label class="form-check-label" for="inlineRadio2">Tiros</label>
          </div>
        </div>
      </template>

      <template  v-if="plataforma == 'XBoxOne'">
        <label for="Plataformas">Categorias</label>
        <div class="form-group row">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="accion" value="accion">
            <label class="form-check-label" for="inlineRadio1">Accion</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="deportes" value="deportes">
            <label class="form-check-label" for="inlineRadio2">Deportes</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" v-model="categoria" name="categorias" id="simulacion" value="simulacion">
            <label class="form-check-label" for="inlineRadio2">Simulación</label>
          </div>
        </div>
      </template>

      <button type="submit" value="buscar" class="btn btn-outline-success">Buscar Juegos</button>
    </form>
    <div v-if="mostrar == true" class="row pt-5">
      <div class="col-md-12">
        <div class="pb-3">
          <input type="text" placeholder="Buscar" class="form-control" name="buscar" value="buscar" v-model="titulo">
        </div>
        <table class="table table-striped">
          <thead style="background-color:#434343;color:#fb6207">
            <tr>
              <th >Juego</th>
              <th>Nombre</th>
              <th>Descripcion</th>
              <th>Tipo</th>
              <th>Plaforma</th>
              <th>Categoria</th>
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
              <td>{{Producto.tipo}}</td>
              <td>{{Producto.plataforma}}</td>
              <td>{{Producto.categoria}}</td>
              <td>{{Producto.precio}}€</td>
              <td>{{Producto.oferta}}€</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      plataforma: '',
      categoria: '',
      Productos: [],
      mostrar: false,
      titulo: ''
    }
  },
  methods: {
    getProductos() {
      this.mostrar = true;
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data.filter(data => data.plataforma == this.plataforma && data.categoria == this.categoria);
        });
    }
  },
  computed: {
    buscarProducto() {
      return this.Productos.filter(Producto => Producto.titulo.includes(this.titulo));
    }
  }
}
</script>
