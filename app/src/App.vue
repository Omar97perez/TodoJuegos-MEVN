<template>
  <div id="app">
    <!-- <link rel="icon" href="./assets/Logotipo.png"> -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class="container-fluid fondo">
      <div class="row">
        <div class="col-2 ">
        </div>
        <div class="col-8 fondo-juegos">
          <nav class="navbar navbar-expand-lg justify-content-between">
                <a href="#/">
                  <img src="./assets/Logotipo.png" alt="Logotipo" class="logo">
                </a>
                <form class="form-inline">
                  <input class="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                </form>
                <i>
                  <a href="#/login"><i class="fa fa-user col-md-5" style="font-size:24px"></i></a>
                  <a href="#/carrito"><i class="fa fa-shopping-cart col-md-5" style="font-size:24px"></i></a>
                </i>
          </nav>

          <nav class="navbar navbar-expand-lg justify-content-between" style="margin-right:-31px;margin-left:-31px;margin-top:-31px;">
                <div class="collapse navbar-collapse" id="navbarNavDropdown"  style="background-color:#434343">
                  <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VideoJuegos</a>
                      <div class="dropdown-menu" aria-labelledby>
                        <a class="dropdown-item" href="#/Pc">PC</a>
                        <a class="dropdown-item" href="#/Ps4">PS4</a>
                        <a class="dropdown-item" href="#/Xbox_one">X-Box One</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accesorios</a>
                      <div class="dropdown-menu" aria-labelledby>
                        <a class="dropdown-item" href="#/Pc">PC</a>
                        <a class="dropdown-item" href="#/Ps4">PS4</a>
                        <a class="dropdown-item" href="#/Xbox_one">X-Box One</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seminuevos</a>
                      <div class="dropdown-menu" aria-labelledby>
                        <a class="dropdown-item" href="#/Pc">PC</a>
                        <a class="dropdown-item" href="#/Ps4">PS4</a>
                        <a class="dropdown-item" href="#/Xbox_one">X-Box One</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Merchandising</a>
                      <div class="dropdown-menu" aria-labelledby>
                        <a class="dropdown-item" href="#">Figuras</a>
                        <a class="dropdown-item" href="#">Figuras Pop</a>
                        <a class="dropdown-item" href="#">Ropa</a>
                        <a class="dropdown-item" href="#">Peluches</a>
                      </div>
                    </li>
                    <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Electronica</a>
                      <div class="dropdown-menu" aria-labelledby>
                        <a class="dropdown-item" href="#">Smartphones</a>
                        <a class="dropdown-item" href="#">Tablets</a>
                      </div>
                    </li>
                  </ul>
                </div>

          </nav>
        </div>
      </div>
    </div>

    <div class="container-fluid fondo">
      <div class="row">
        <div class="col-md-2"></div>
        <div class="col-sm-12 col-md-8 pb-3 fondo-juegos">
          <router-view/>
        </div>
        <div class="col-md-2"></div>
      </div>
    </div>

    <div class="container-fluid text-center text-md-left page-footer font-small pt-4  fondo" style="margin-top:-25px;">
      <!-- Grid row -->
      <div class="row">
        <div class="col-2">
        </div>

        <!-- Grid column -->
        <div class="col-8" >
            <div class="row py-4 d-flex align-items-center" style="background-color: #434343; color:#EA5900">

              <!-- Grid column -->
              <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                <h6 class="mb-0">Entérate de nuestras promociones Con nuestras redes sociales.</h6>
              </div>
              <!-- Grid column -->

              <!-- Grid column -->
              <div class="col-md-6 col-lg-7 text-center text-md-right">

                <!-- Facebook -->
                <a class="fb-ic"><i class="fa fa-facebook white-text mr-4"> </i></a>
                <!-- Twitter -->
                <a class="tw-ic"><i class="fa fa-twitter white-text mr-4"> </i></a>
                <!-- Google +-->
                <a class="gplus-ic"><i class="fa fa-google-plus white-text mr-4"> </i></a>
                <!--Linkedin -->
                <a class="li-ic"><i class="fa fa-linkedin white-text mr-4"> </i></a>
                <!--Instagram-->
                <a class="ins-ic"><i class="fa fa-instagram white-text"> </i></a>

              </div>
              <!-- Grid column -->

            </div>

            <div class="row" style="background-color: #434343; color:#EA5900">

                <!-- Grid column -->
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                  <!-- Content -->
                  <h6 class="text-uppercase font-weight-bold">Todo Juegos</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                  <p>Precios de los artículos sujetos a condiciones de compra del momento, realizando el pago acepta estas condiciones</p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">

                  <!-- Links -->
                  <h6 class="text-uppercase font-weight-bold">Productos</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                  <p><i class="mr-3"></i>Videojuegos</p>
                  <p><i class="mr-3"></i>Accesorios</p>
                  <p><i class="mr-3"></i>Seminuevos</p>
                  <p><i class="mr-3"></i>Merchandising</p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">

                  <!-- Links -->
                  <h6 class="text-uppercase font-weight-bold">Links de utilidad</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                  <p><i class=" mr-3"></i>Tu cuenta</p>
                  <p><i class=" mr-3"></i>Registrate</p>
                  <p><i class="home mr-3"></i>Productos nuevos</p>
                  <p><i class="mr-3"></i>Ayuda</p>

                </div>
                <!-- Grid column -->

                <!-- Grid column -->
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">

                  <!-- Links -->
                  <h6 class="text-uppercase font-weight-bold">Contact</h6>
                  <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                  <p><i class="fa fa-home mr-3"></i>Tenerife</p>
                  <p><i class="fa fa-envelope mr-3"></i> TodoJuegos@gmail.com</p>
                  <p><i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                  <p><i class="fa fa-print mr-3"></i> + 01 234 567 89</p>

                </div>
                <!-- Grid column -->

            </div>

            <div class="row py-4 d-flex align-items-center" style="background-color: #434343; color:#EA5900">
                <div class="col-md-6 col-lg-7 text-center text-md-right">
                    2018 Copyright: TodoJuegos
                </div>
            </div>
        </div>
          <!-- Grid column -->

        <div class="col-2">
        </div>

      </div>
      <!-- Grid row -->

    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  .logo {
    height: 96px;
    width: 154px;
    padding-bottom: 10px;
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

  li a {
    color: #EA5900;
  }

  .fondo {
    background-color: #fb6207;
  }

  .fondo-juegos {
    background-color: #dfdce3;
  }

  .nav-link:hover, .nav-link:focus {
    text-decoration: none;
    color: white;
  }

  /* CSS Carrito de la compra */

  .shopping-cart {
    width: 750px;
    margin: 80px auto;
    background: #FFFFFF;
    box-shadow: 1px 2px 3px 0px rgba(0,0,0,0.10);
    border-radius: 6px;

    display: flex;
    flex-direction: column;
  }
  .cart-tittle{
    height: 60px;
    border-bottom: 1px solid #E1E8EE;
    padding: 20px 30px;
    color: #5E6977;
    font-size: 30px;
    font-weight: 400;
  }

  .product-img{
    height: 100;
  }

  .item {
    padding: 20px 30px;
    height: 120px;
    display: flex;
  }

  .item:nth-child(3) {
    border-top:  1px solid #E1E8EE;
    border-bottom:  1px solid #E1E8EE;
  }

  .bttns {
    position: relative;
    padding-top: 30px;
    margin-right: 60px;
  }

  .delete-btn {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  .delete-btn:hover{
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    /*background: rgb(255, 0, 0);*/
    font-weight: 300;
    -ms-transform: scale(1.5); /* IE 9 */
    -webkit-transform: scale(1.5); /* Safari 3-8 */
    transform: scale(1.5);
  }

  .like-btn {
    position: absolute;
    top: 9px;
    left: 15px;
    display: inline-block;
    background: url('./assets/twitter-heart.png');
    width: 60px;
    height: 60px;
    background-size: 2900%;
    background-repeat: no-repeat;
    cursor: pointer;
  }

  .is-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-timing-function: steps(28);
    animation-fill-mode: forwards;
  }

  @keyframes animate {
    0%   { background-position: left;  }
    50%  { background-position: right; }
    100% { background-position: right; }
  }

  .image {
    margin-right: 50px;
  }

  .description {
    padding-top: 10px;
    margin-right: 60px;
    width: 115px;
  }

  .description span {
    display: block;
    font-size: 14px;
    color: #43484D;
    font-weight: 400;
  }

  .description span:first-child {
    margin-bottom: 5px;
  }
  .description span:last-child {
    font-weight: 300;
    margin-top: 8px;
    color: #86939E;
  }

  /* Product Quantity */
  .quantity {
    padding-top: 20px;
    margin-right: 60px;
  }
  .quantity input {
    -webkit-appearance: none;
    border: none;
    text-align: center;
    width: 32px;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  button[class*=bttns] {
    width: 30px;
    height: 30px;
    background-color: #E1E8EE;
    border-radius: 6px;
    border: none;
    cursor: pointer;
  }
  .minus-btn img {
    margin-bottom: 3px;
  }
  .plus-btn img {
    margin-top: 2px;
  }
  button:focus,
  input:focus {
    outline:0;
  }

  /* Total Price */
  .total-price {
    width: 83px;
    padding-top: 27px;
    text-align: center;
    font-size: 16px;
    color: #43484D;
    font-weight: 300;
  }

  /* Responsive */
  @media (max-width: 800px) {
    .shopping-cart {
      width: 100%;
      height: auto;
      overflow: hidden;
    }
    .item {
      height: auto;
      flex-wrap: wrap;
      justify-content: center;
    }
    .image img {
      width: 50%;
    }
    .image,
    .quantity,
    .description {
      width: 100%;
      text-align: center;
      margin: 6px 0;
    }
    .bttns {
      margin-right: 20px;
    }
  }

  .buy-btn{
    float: right;
    background-color: transparent;
    box-shadow: none;
    border: 0px;
    color: #43484D;
  }

  .buy-btn:hover{
    float: right;
    background-color: transparent;
    box-shadow: none;
    border: 0px;
    color: #43484D;
  }

  .credit-card-box .panel-title {
    display: inline;
    font-weight: bold;
  }
  .credit-card-box .form-control.error {
    border-color: red;
    outline: 0;
    box-shadow: inset 0 1px 1px rgba(0,0,0,0.075),0 0 8px rgba(255,0,0,0.6);
  }
  .credit-card-box label.error {
  font-weight: bold;
  color: red;
  padding: 2px 8px;
  margin-top: 2px;
  }
  .credit-card-box .payment-errors {
  font-weight: bold;
  color: red;
  padding: 2px 8px;
  margin-top: 2px;
  }
  .credit-card-box label {
    display: block;
  }
  /* The old "center div vertically" hack */
  .credit-card-box .display-table {
    display: table;
  }
  .credit-card-box .display-tr {
    display: table-row;
  }
  .credit-card-box .display-td {
    display: table-cell;
    vertical-align: middle;
    width: 50%;
  }
  /* Just looks nicer */
  .credit-card-box .panel-heading img {
    min-width: 180px;
  }

  .filepond--drop-label {
    color: #4c4e53;
  }

  .filepond--label-action {
    text-decoration-color: #babdc0;
  }

  .filepond--panel-root {
    border-radius: 2em;
    background-color: #edf0f4;
    height: 1em;
  }

  .filepond--item-panel {
    background-color: #595e68;
  }

  .filepond--drip-blob {
    background-color: #7f8a9a;
  }
</style>
