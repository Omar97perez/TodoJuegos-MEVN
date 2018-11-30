<template>
  <div class="container-fluid">
    <strong><p class="titulo-footer">Registro</p></strong>
    <form id="registro" method="POST" action="/api/signup" class="text-left">
      <div class="form-group">
        <label for="name">Nombre</label>
        <input type="text" class="form-control" id="name" placeholder="Nombre">
      </div>
      <div class="form-group">
        <label for="surname">Apellidos</label>
        <input type="text" class="form-control" id="surname" placeholder="Apellidos">
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
        <input type="email" class="form-control" id="email" placeholder="Email">
      </div>
      <div class="form-group">
        <label for="genero">
          Género
        </label>
        <select class="form-control" name="sexos" id="sexo">
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
          <option value="otros">Otros</option>
        </select>
      </div>
      <div class="form-group">
        <label for="password">Contraseña</label>
        <input type="password" class="form-control" id="password" placeholder="Contraseña">
      </div>
      <button type="submit" value="registrarse" class="btn btn-outline-success">Registrarse</button>
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
  }
}
</script>
