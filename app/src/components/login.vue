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
      <p>Si no tienes cuenta aún, puedes <a href="#/registro">registrate</a>.</p>
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .fondo-juegos {
    background-color: #dfdce3;
  }

  .btn-outline-success {
    color: white;
    background-color: #434343;
    background-image: none;
    border-color: white;
  }
  .btn-outline-success:hover {
    color: #434343;
    background-color: darkorange;
    border-color: darkorange;
  }

  a i{
    color: #323232;
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
