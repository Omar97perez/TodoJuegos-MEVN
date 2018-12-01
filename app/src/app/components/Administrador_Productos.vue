
<template>
    <div class="container-fluid">
     <h1 class="text-center"> Modificar Página </h1>
      <div class="row pt-5">
        <div class="col-md-12">
              <form @submit.prevent="sendProducto">
                <div class="form-group ">
                  <input type="text" v-model="Producto.id" class="form-control"  placeholder="Inserta el id">
                </div>
                <div class="form-group ">
                  <input type="text" v-model="Producto.titulo" class="form-control"  placeholder="Inserta el nombre">
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.foto" class="form-control" placeholder="Inserta Url de la foto">
                </div>
                <div class="form-group">
                  <textarea v-model="Producto.descripcion" cols="30" rows="5" placeholder="Inserta una descripción" class="form-control"></textarea>
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.tipo" class="form-control" placeholder="Inserta el tipo">
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.plataforma" class="form-control" placeholder="Inserta la plataforma">
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.categoria" class="form-control" placeholder="Inserta la categoria">
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.precio" class="form-control" placeholder="Inserta el precio">
                </div>
                <div class="form-group">
                  <input type="text" v-model="Producto.oferta" class="form-control" placeholder="Inserta la oferta">
                </div>
                <template v-if="edit === false">
                  <button class="btn btn-primary btn-block" style="background-color:#434343;color:#434343;color:#fb6207">Send</button>
                </template>
                <template v-else>
                  <button class="btn btn-primary btn-block"style="background-color:#434343;color:#434343;color:#fb6207">Edit</button>
                </template>
              </form>
        </div>
      </div>
      <div class="row pt-5">
        <div class="col-md-12">
          <table class="table table-striped">
            <thead style="background-color:#434343;color:#fb6207">
              <tr>
                <th >ID</th>
                <th >Nombre</th>
                <th>Foto</th>
                <th>Decripcion</th>
                <th>Tipo</th>
                <th>Plaforma</th>
                <th>Categoria</th>
                <th>Precio</th>
                <th>Oferta</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody >
              <tr v-for="Producto of Productos">
                <td>{{Producto.id}}</td>
                <td>{{Producto.titulo}}</td>
                <td>
                  <div class="img-box">
                    <img v-bind:src="Producto.foto"  width="150" height="150"></img>
                  </div>
                </td>
                <td>{{Producto.descripcion}}</td>
                <td>{{Producto.tipo}}</td>
                <td>{{Producto.plataforma}}</td>
                <td>{{Producto.categoria}}</td>
                <td>{{Producto.precio}}</td>
                <td>{{Producto.oferta}}</td>
                <td>
                  <button @click="deleteProducto(Producto._id)" class="btn btn-danger mb-4" >Delete</button>
                  <button @click="editProducto(Producto._id)" class="btn btn-secondary" style="background-color:#434343">Edit</button>
                </td>
              </tr>
            </tbody>
          </table>
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
      ProductoToEdit: ''
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
