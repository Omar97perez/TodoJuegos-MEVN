<template>
<div id="app" class="container-fluid">
  <div class="row">
  <div class="col-2"></div>
  <div class="col-8 fondo-juegos">
      <div class="container-center">
          <form class="form-center" @submit.prevent="sendProducto">
              <div class="form-group row">
                  <div class="col">
                      <label for="tittle">Titulo del producto</label>
                      <input v-model="Producto.titulo" type="text" class="form-control">
                  </div>

                  <div class="col">
                      <label for="price">Precio</label>
                      <input type="text" class="form-control">
                  </div>
              </div>

              <div class="form-group">
                  <label for="desc">Descripción del articulo</label>
                  <textarea name="desc" id="desc" cols="30" rows="5" class="form-control"></textarea>
              </div>

              <div class="form-group">
                  <label for="sel1">Tipo de producto:</label>
                  <select class="form-control" id="product" name="product" v-model="selected" style="height: 40px;">
                      <option value="0"></option>
                      <option value="1">Juego</option>
                      <option value="2">Consola</option>
                      <option value="3">Accesorio</option>
                      <option value="4">Mercha</option>
                  </select>
              </div>

              <div v-if="selected === '1'" class="form-group" id="game">
                  <label for="">Categoria</label>
                  <select class="form-control" name="" id="" style="height: 40px;">
                      <option value=""></option>
                      <option value="">Aventura</option>
                      <option value="">Deportes</option>
                      <option value="">Acción</option>
                      <option value="">Conducción</option>
                      <option value="">Estrategia</option>
                      <option value="">RPG</option>
                  </select>

                  <label for="">Plataforma</label>
                  <select class="form-control" name="" id="" style="height: 40px;">
                      <option value=""></option>
                      <option value="">PS4</option>
                      <option value="">PC</option>
                      <option value="">XBOX ONE</option>
                      <option value="">SWITCH</option>
                      <option value="">Multiplataforma</option>
                  </select>
              </div>

              <div v-if="selected === '3'" class="form-group" id="acc">
                  <label for="">Tipo de accesorio</label>
                  <select class="form-control" name="" id="" style="height: 40px;">
                      <option value=""></option>
                      <option value="">Mandos</option>
                      <option value="">Sillas</option>
                      <option value="">Teclados</option>
                      <option value="">Ratones</option>
                      <option value="">Cargadores</option>
                  </select>
              </div>

              <div v-if="selected === '4'" class="form-group" id="mercha">
                  <label for="">Tipo de mercha</label>
                  <select class="form-control" name="" id="" style="height: 40px;">
                      <option value=""></option>
                      <option value="">Camiseta</option>
                      <option value="">Sudadera</option>
                      <option value="">Chapas</option>
                      <option value="">Cartas</option>
                  </select>
              </div>
              
              <div class="form-group">
                  <label for="">Imagen del producto</label>
                  <input type="file" class="filepond" name="filepond" multiple data-max-file-size="10MB" data-max-files="3"/>
              </div>

              <button type="submit" class="btn btn-default">Publicar</button>
          </form>
      </div>
  </div>
  </div>
</div>
</template>

<script>
class Producto {
  constructor(titulo = '', foto = '',  descripcion = '', tipo = '', plataforma = '',categoria = '', precio = '', oferta = '',) {
    this.titulo = titulo;
    this.foto = foto;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.plataforma = plataforma;
    this.categoria = categoria;
    this.precio = precio;
    this.oferta = oferta;
  }
}
export default {
  data() {
    return {
      Producto: new Producto(),
      Productos: [],
      edit: false,
      ProductoToEdit: '',
      selected: null,
    }
  },
  created() {
    this.getProductos();
  },
  methods: {
    sendProducto() {
      if(this.edit === false) {
        fetch('/api/TodoJuegos/Producto/', {
          method: 'POST',
          body: JSON.stringify(this.Producto),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getProductos();
            this.Producto = new Producto();
          });
      }
      else {
        fetch('/api/TodoJuegos/Producto/' + this.ProductoToEdit, {
          method: 'PUT',
          body: JSON.stringify(this.Producto),
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        })
          .then(res => res.json())
          .then(data => {
            this.getProductos();
            this.Producto = new Producto();
            this.edit = !this.edit;
          });
      }
    },
    getProductos() {
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
    deleteProducto(ProductoId) {
      fetch('/api/TodoJuegos/Producto/' + ProductoId, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(res => res.json())
        .then(data => {
          this.getProductos();
        });
    },
    editProducto(ProductoId) {
      fetch('/api/TodoJuegos/Producto/' + ProductoId)
        .then(res => res.json())
        .then(data => {
          const { _id,titulo,foto,descripcion,tipo,plataforma,categoria,precio,oferta} = data;
          this.Producto = new Producto(titulo,foto,descripcion,tipo,plataforma,categoria,precio,oferta);
          this.ProductoToEdit = _id;
          this.edit = true;
        });
    }
  }
}
</script>