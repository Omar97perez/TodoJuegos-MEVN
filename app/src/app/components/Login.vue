<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Inicio Sesion</p></strong>
    <form id="login" @submit.prevent="login" class="text-left">
      <div class="form-group">
        <label for="email"><b>Email</b></label>
        <input type="email" v-model="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
        <small id="emailHelp" class="form-text text-muted">Nosotros no compartiremos tu Email con nadie.</small>
      </div>
      <div class="form-group">
        <label for="password"><b>Contraseña</b></label>
        <input type="password" v-model="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <p>Si no tienes cuenta aún, puedes <router-link :to="{ name: 'Registro' }">Registrate</router-link>.</p>
      <button type="submit" class="btn btn-outline-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken',{
        email: this.email,
        password: this.password
      })
      .then(response => {
        this.$store.dispatch('get_user_data')
        this.$router.push({ name: 'Inicio' })
      })
    }
  }
}
</script>
