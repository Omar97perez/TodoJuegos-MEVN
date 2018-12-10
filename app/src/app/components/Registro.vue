<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Registro</p></strong>
    <form id="registro" @submit.prevent="register" class="text-left">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" placeholder="Nombre" v-model="name">
      </div>
      <div class="form-group">
        <label for="surname">Apellidos</label>
        <input type="text" class="form-control" id="surname" placeholder="Apellidos" v-model="surname">
      </div>
      <div class="form-group">
        <label for="birthdate">
          Fecha de nacimiento
        </label>
        <input type="date" class="form-control" id="birthdate" placeholder="Fecha de nacimiento" v-model="birthdate">
      </div>
      <div class="form-group">
        <label for="email">
          Email
        </label>
        <input type="email" class="form-control" id="email" placeholder="Email" v-model="email">
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Contraseña" v-model="password">
      </div>
      <div class="form-group">
        <label class="col-form-label col-sm-2">Género</label>
        <div class="col-sm-10">
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="masculino" v-model="genre">
            <label class="form-check-label" for="masculino">
              Masculino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="femenino" v-model="genre">
            <label class="form-check-label" for="femenino">
              Femenino
            </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="radio" name="generos" id="genero" value="otro" v-model="genre">
            <label class="form-check-label" for="otro">
              Otro
            </label>
          </div>
        </div>
      </div>
      <button type="submit" value="registrarse" class="btn btn-outline-success" @click="">Registrarse</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register',
  data () {
    return {
      name: '',
      surname: '',
      email: '',
      password: '',
      birthdate: '',
      genre: ''
    }
  },
  methods: {
    register () {
      this.$store.dispatch('register', {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
        birthdate: this.birthdate,
        genre: this.genre
      })
      .then(response => {
        this.$router.push({ name: 'Login' })
      })
    }
  }
}
</script>
