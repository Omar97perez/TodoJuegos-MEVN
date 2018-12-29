<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Cuenta de usuario {{getName}}</p></strong>
    <form id="registro" method="POST" action="/api/signup" class="text-left">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="getName" placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="surname">Apellidos</label>
        <input type="text" class="form-control" id="surname" v-model="getSurname" placeholder="Apellidos">
      </div>
      <div class="form-group">
        <label for="birthdate">
          Fecha de nacimiento
        </label>
        <input type="date" class="form-control" id="birthdate" placeholder="Fecha de nacimiento">
      </div>
      <div class="form-group">
        <label for="email">
          Email
        </label>
        <input type="email" class="form-control" id="email" v-model="getEmail" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <div class="form-group">
        <label class="col-form-label col-sm-2">Género</label>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" checked="true" value="masculino">
            <label class="form-check-label" for="masculino">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="femenino">
            <label class="form-check-label" for="femenino">
              Femenino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="otro">
            <label class="form-check-label" for="otro">
              Otro
            </label>
          </div>
        </div>
      </div>
      <button @submit="actualizar()" value="guardar" class="btn btn-outline-success">Guardar datos</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return{
    }
  },
  created(){
  },
  computed: {
    getName() {
      return this.$store.getters.name
    },
    getSurname() {
      return this.$store.getters.surname
    },
    getBirthdate() {
      return this.$store.getters.birthdate
    },
    getGenre() {
      return this.$store.getters.genre
    },
    getEmail() {
      return this.$store.getters.email
    }
  }
}
</script>
