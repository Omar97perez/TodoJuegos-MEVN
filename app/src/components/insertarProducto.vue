<template>
  <div class="container-center">
      <form class="form-center" action="" method="POST">
          <div class="form-group row">
              <div class="col">
                  <label for="tittle">Titulo del producto</label>
                  <input type="text" class="form-control">
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
              <select class="form-control" id="product" name="product" onchange="">
                  <option value="0"></option>
                  <option value="1">Juego</option>
                  <option value="2">Consola</option>
                  <option value="3">Accesorio</option>
                  <option value="4">Mercha</option>
              </select>
          </div>

          <div class="form-group" id="game">
              <label for="">Categoria</label>
              <select class="form-control" name="" id="">
                  <option value=""></option>
                  <option value="">Aventura</option>
                  <option value="">Deportes</option>
                  <option value="">Acción</option>
                  <option value="">Conducción</option>
                  <option value="">Estrategia</option>
                  <option value="">RPG</option>
              </select>

              <label for="">Plataforma</label>
              <select class="form-control" name="" id="">
                  <option value=""></option>
                  <option value="">PS4</option>
                  <option value="">PC</option>
                  <option value="">XBOX ONE</option>
                  <option value="">SWITCH</option>
                  <option value="">Multiplataforma</option>
              </select>
          </div>

          <div class="form-group" id="acc">
              <label for="">Tipo de accesorio</label>
              <select class="form-control" name="" id="">
                  <option value=""></option>
                  <option value="">Mandos</option>
                  <option value="">Sillas</option>
                  <option value="">Teclados</option>
                  <option value="">Ratones</option>
                  <option value="">Cargadores</option>
              </select>
          </div>

          <div class="form-group" id="mercha">
              <label for="">Tipo de mercha</label>
              <select class="form-control" name="" id="">
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
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
    $(document).ready(function () {
        toggleFields()
        $("#product").change(function () {
            toggleFields()
        })

    })

    function toggleFields() {
        if ($("#product").val() == 0){
            $("#game").hide()
            $("#acc").hide()
            $("#mercha").hide()
        }

        if ($("#product").val() == 1){
            $("#game").show()
            $("#acc").hide()
            $("#mercha").hide()
        }

        if ($("#product").val() == 2){
            $("#game").hide()
            $("#acc").hide()
            $("#mercha").hide()
        }

        if ($("#product").val() == 3){
            $("#game").hide()
            $("#acc").show()
            $("#mercha").hide()
        }

        if ($("#product").val() == 4){
            $("#game").hide()
            $("#acc").hide()
            $("#mercha").show()
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .logo {
    height: 96px;
    width: 154px;
    padding-bottom: 10px;
  }

  .fondo-juegos {
    background-color: #dfdce3;
  }

  .fondo-black{
    background-color: #434343;
  }

  li a {
    color: #EA5900;
  }

  .img-todojuegos {
    height: 192px;
    width: 308px;
  }

  .titulo-footer {
    font-size: 1.5em;
  }

  .footer-div {
    padding-top: 200px;
  }
</style>
