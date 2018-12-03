
<template>
    <div class="container-fluid">
     <h1 class="text-center"> Modificar Página </h1>
      <div class="row pt-5">
        <div class="col-md-12">
              <form @submit.prevent="sendProducto">
                <div class="form-group row">
                    <div class="col">
                        <label for="tittle">Titulo del producto</label>
                        <input v-model="Producto.titulo" type="text" class="form-control">
                    </div>

                    <div class="col">
                        <label for="price">Precio</label>
                        <input v-model="Producto.precio" type="text" class="form-control">
                    </div>

                    <div class="col">
                        <label for="price">Oferta</label>
                        <input v-model="Producto.oferta" type="text" class="form-control">
                    </div>
                </div>

                <div class="form-group">
                    <label for="desc">Descripción del articulo</label>
                    <textarea v-model="Producto.descripcion" name="desc" id="desc" cols="30" rows="5" class="form-control"></textarea>
                </div>
  
                <div class="form-group">
                    <label for="sel1">Tipo de producto:</label>
                    <select class="form-control" id="product" name="product" v-model="Producto.tipo" style="height: 40px;">
                        <option value="0"></option>
                        <option value="videojuego">Juego</option>
                        <option value="consola">Consola</option>
                        <option value="accesorio">Accesorio</option>
                        <option value="mercha">Mercha</option>
                    </select>
                </div>
                
                <div v-if="Producto.tipo === 'videojuego'" class="form-group" id="game">
                    <label for="">Categoria</label>
                    <select v-model="Producto.categoria" class="form-control" name="" id="" style="height: 40px;">
                        <option value=""></option>
                        <option value="aventura">Aventura</option>
                        <option value="deportes">Deportes</option>
                        <option value="accion">Acción</option>
                        <option value="conduccion">Conducción</option>
                        <option value="estrategia">Estrategia</option>
                        <option value="rpg">RPG</option>
                    </select>

                    <label for="">Plataforma</label>
                    <select v-model="Producto.plataforma" class="form-control" name="" id="" style="height: 40px;">
                        <option value=""></option>
                        <option value="Ps4">PS4</option>
                        <option value="Pc">PC</option>
                        <option value="XBoxOne">XBOX ONE</option>
                        <option value="Switch">SWITCH</option>
                        <option value="Multi">Multiplataforma</option>
                    </select>
                </div>

                <div v-if="Producto.tipo === 'consola'" class="form-group" id="game">
                  <label for="sel1">Tipo de consola:</label>
                  <select v-model="Producto.plataforma" class="form-control" name="" id="" style="height: 40px;">
                      <option value=""></option>
                      <option value="Ps4">PS4</option>
                      <option value="Pc">PC</option>
                      <option value="XBoxOne">XBOX ONE</option>
                      <option value="Switch">SWITCH</option>
                      <option value="Multi">Multiplataforma</option>
                  </select>
                </div>

                <div v-if="Producto.tipo === 'accesorio'" class="form-group" id="acc">
                    <label for="">Tipo de accesorio</label>
                    <select v-model="Producto.categoria" class="form-control" name="" id="" style="height: 40px;">
                        <option value=""></option>
                        <option value="mando">Mandos</option>
                        <option value="silla">Sillas</option>
                        <option value="teclado">Teclados</option>
                        <option value="raton">Ratones</option>
                        <option value="cargador">Cargadores</option>
                    </select>
                </div>

                <div v-if="Producto.tipo === 'mercha'" class="form-group" id="mercha">
                    <label for="">Tipo de mercha</label>
                    <select v-model="Producto.categoria" class="form-control" name="" id="" style="height: 40px;">
                        <option value=""></option>
                        <option value="camiseta">Camiseta</option>
                        <option value="sudadera">Sudadera</option>
                        <option value="chapa">Chapas</option>
                        <option value="cartas">Cartas</option>
                    </select>
                </div>
                
                <div class="form-group">
                    <label for="">Imagen del producto</label>
                    <input type="file" class="filepond" name="filepond" multiple data-max-file-size="10MB" data-max-files="3"/>
                </div>-->

                <button type="submit" class="btn btn-default">Publicar</button>
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
