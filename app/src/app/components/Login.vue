<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Inicio Sesion</p></strong>
    <form id="login" method="POST" action="/api/signin" class="text-left">
      <div class="form-group">
        <label for="email"><b>Email</b></label>
        <input type="email" class="form-control" id="email" aria-describedby="emailHelp" placeholder="Email">
        <small id="emailHelp" class="form-text text-muted">Nosotros no compartiremos tu Email con nadie.</small>
      </div>
      <div class="form-group">
        <label for="password"><b>Contraseña</b></label>
        <input type="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <p>Si no tienes cuenta aún, puedes <a><router-link :to="{ name: 'Registro' }" class="nav-link">Registrate</router-link></a>.</p>
      <button type="submit" class="btn btn-outline-success">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  }
}
</script>
