<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Cuenta de usuario {{getName}}</p></strong>
    <form id="actualizar" @submit.prevent="update" class="text-left">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" v-model="name" :placeholder="getName">
      </div>
      <div class="form-group">
        <label for="surname">Apellidos</label>
        <input type="text" class="form-control" id="surname" v-model="surname" :placeholder="getSurname">
      </div>
      <div class="form-group">
        <label for="birthdate">
          Fecha de nacimiento
        </label>
        <input type="date" class="form-control" id="birthdate" :placeholder="getBirthdate">
      </div>
      <div class="form-group">
        <label for="email">
          Email
        </label>
        <input type="email" class="form-control" id="email" v-model="email" :placeholder="getEmail">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" v-model="password" id="password" placeholder="Contraseña">
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
      <button type="submit" value="guardar" class="btn btn-outline-success">Guardar datos</button>
      <div id="merror"></div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ModUsuario',
  data() {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      birthdate: '',
      genre: ''
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
  },
  methods: {
    update () {
      this.$store.dispatch('update', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        birthdate: this.birthdate,
        genre: this.genre
      })
      .then(response => {
        // console.log(`Respuesta : ${Object.keys(response.data)}`)
        console.log(`Respuesta : ${response.data.message}`)
        $('#merror').empty()
        $('#merror').append(`
            <br>
            <p role="alert" class="mensaje">${response.data.message}</p>
          `)
        //this.$router.push({ name: 'ModUsuario' })
      })
    }
  }
}
</script>
