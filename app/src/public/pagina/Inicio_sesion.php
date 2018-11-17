<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <link rel="icon" href="img/Logotipo.png">
    <link rel="stylesheet" href="styles/styles.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
    <title>TodoJuegos</title>
  </head>
  
  
  <header>
    <?php require 'Header.php' ?>
  </header>

  <body class="fondo">
    <div class="container-fluid">
          <div class="row">
          <div class="col-2">

            </div>
            <div class="col-8 pb-3 pt-3 fondo-juegos">
              <form>
                <div class="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input type="email" class="form-control" id="InputEmail1" aria-describedby="emailHelp" placeholder="Email">
                  <small id="emailHelp" class="form-text text-muted">Nosotros no compartiremos tu Email con nadie.</small>
                </div>
                <div class="form-group">
                  <label for="exampleInputPassword1">Contraseña</label>
                  <input type="password" class="form-control" id="InputPassword1" placeholder="Contraseña">
                </div>
                <button type="submit" class="btn btn-outline-success">Enviar</button>
              </form>
            </div>
          </div>
    </div>
    
   
  </body>
 <footer class="page-footer font-small " style="margin-top:-15px;">
      <?php require 'Footer.php' ?>
  </footer>
  

</html>
