<template>

  <div style="background-color: #fb6207;">
    <header>
      <div class="container" >
        <div class="row">
          <div class="col-12 fondo-juegos">
            <nav class="navbar navbar-expand-md navbar-light sticky-top">
              <div class="col-11 col-md-9 col-lg-10">
                <a href="#">
                  <router-link :to="{ name: 'Inicio' }" class="nav-link"><img src="img/Logotipo.png" alt="Logotipo" class="logo"></router-link>
                </a>
              </div>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#iconos" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="iconos">
                <ul class="navbar-nav text-right">
                  <router-link :to="{ name: 'Buscador' }"><i class='fa fa-search mb-sm-4 mr-md-4' style='font-size:24px'></i></router-link>

                  <li class="nav-item dropdown mb-sm-4 mr-md-4"  v-if="loggedIn">
                    <a class="dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user" style="font-size:24px"></i></a>
                    <div class="dropdown-menu" aria-labelledby="login">
                      <a class="dropdown-item" ><router-link :to="{ name: 'ModUsuario' }" class="na-link"> <i class="fa fa-user" style="font-size:24px"></i>Modificar Usuario</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Logout' }" class="na-link"> <i class="fa fa-sign-out"style="font-size:24px"></i>Logout</router-link></a>
                    </div>
                  </li>
                  <router-link v-else :to="{ name: 'Login' }"><i class="fa fa-user mb-sm-4 mr-md-4" style="font-size:24px"></i></router-link>

                  <a  class="fa fa-commenting mb-sm-4 mr-md-4" style="font-size:24px;color:#323232" href="https://todojuegos-c5f40.firebaseapp.com/""></a>

                  <i class="fa fa-shopping-cart mb-sm-4 mr-md-4" style="font-size:24px" data-toggle="modal" data-target="#shoppingCart">({{ numInCart }})</i>
                </ul>
              </div>
            </nav>

            <nav class="navbar navbar-expand-md navbar-dark bg-dark" style="margin-right:-15px;margin-left:-15px;margin-top:-31px;">

              <div class="col-sm-11 col-md-1">
              </div>

              <button class="navbar-toggler mt-3 mb-3" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarNavDropdown">
                <ul class="navbar-nav">
                  <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle pl-3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VideoJuegos</a>
                    <div class="dropdown-menu" aria-labelledby="videojuegos">
                      <a class="dropdown-item" ><router-link :to="{ name: 'Videojuegos_Pc' }" class="nav-link">Pc</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Videojuegos_Ps4' }" class="nav-link">Ps4</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Videojuegos_XboxOne' }" class="nav-link">XboxOne</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Videojuegos_Switch' }" class="nav-link">Switch</router-link></a>
                    </div>
                  </li>
                  <li class="nav-item active pl-3">
                    <router-link :to="{ name: 'Consolas' }" class="nav-link">
                      Consolas
                    </router-link>
                  </li>
                  <li class="nav-item active dropdown">
                    <a class="nav-link dropdown-toggle pl-3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accesorios</a>
                    <div class="dropdown-menu" aria-labelledby="accesorios">
                      <a class="dropdown-item" ><router-link :to="{ name: 'Accesorios_Pc' }" class="nav-link">Pc</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Accesorios_Ps4' }" class="nav-link">Ps4</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Accesorios_XboxOne' }" class="nav-link">XboxOne</router-link></a>
                      <a class="dropdown-item" ><router-link :to="{ name: 'Accesorios_Switch' }" class="nav-link">Switch</router-link></a>
                    </div>
                  </li>
                  <li class="nav-item active pl-3">
                    <router-link :to="{ name: 'Merchandising' }" class="nav-link">
                      Merchandising
                    </router-link>
                  </li>
                  <li class="nav-item active pl-3">
                    <router-link :to="{ name: 'Electronica' }" class="nav-link">
                      Electronica
                    </router-link>
                  </li>
                  <li v-if="loggedIn" class="nav-item active pl-3">
                    <router-link :to="{ name: 'Productos' }" class="nav-link">
                      Administrador
                    </router-link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <!-- CONTENT -->
    <div class="container pb-5 fondo-juegos">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
    <!-- END CONTENT -->
    <footer>
      <div class="container text-center text-md-left page-footer font-small pt-4" style="margin-top:-15px">

        <div class="row">
          <div class="col-md-12" >
              <div class="row py-4 d-flex align-items-center" style="background-color: #434343; color:#EA5900">

            <div class="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
              <h6 class="mb-0">Entérate de nuestras promociones Con nuestras redes sociales.</h6>
            </div>

            <div class="col-md-6 col-lg-7 text-center text-md-right">

              <a class="fb-ic">
                <i class="fa fa-facebook white-text mr-4"> </i>
              </a>

              <a class="tw-ic">
                <i class="fa fa-twitter white-text mr-4"> </i>
              </a>

              <a class="gplus-ic">
                <i class="fa fa-google-plus white-text mr-4"> </i>
              </a>

              <a class="li-ic">
                <i class="fa fa-linkedin white-text mr-4"> </i>
              </a>

              <a class="ins-ic">
                <i class="fa fa-instagram white-text"> </i>
              </a>
            </div>

          </div>
              <div class="row" style="background-color: #434343; color:#EA5900">

                  <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">

                    <h6 class="text-uppercase font-weight-bold">Todo Juegos</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>Precios de los artículos sujetos a condiciones de compra del momento, realizando el pago acepta estas condiciones</p>
                  </div>

                  <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold">Productos</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                       <i class="mr-3"></i>Videojuegos
                    </p>
                    <p>
                       <i class="mr-3"></i>Accesorios
                    </p>
                    <p>
                       <i class="mr-3"></i>Seminuevos
                    </p>
                    <p>
                       <i class="mr-3"></i>Merchandising
                    </p>
                  </div>

                  <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold">Links de utilidad</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                      <i class=" mr-3"></i>Tu cuenta
                    </p>
                    <p>
                      <i class=" mr-3"></i>Registrate
                    </p>
                    <p>
                      <i class="home mr-3"></i>Productos nuevos
                    </p>
                    <p>
                      <i class="mr-3"></i>Ayuda
                    </p>
                  </div>

                  <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <!-- Links -->
                    <h6 class="text-uppercase font-weight-bold">Contact</h6>
                    <hr class="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style="width: 60px;">
                    <p>
                      <i class="fa fa-home mr-3"></i>Tenerife</p>
                    <p>
                      <i class="fa fa-envelope mr-3"></i> TodoJuegos@gmail.com</p>
                    <p>
                      <i class="fa fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p>
                      <i class="fa fa-print mr-3"></i> + 01 234 567 89</p>
                  </div>

        </div>
              <div class="row py-4 d-flex align-items-center" style="background-color: #434343; color:#EA5900">
                  <div class="col-md-6 col-lg-7 text-center text-md-right">
                      2018 Copyright: TodoJuegos
                  </div>
              </div>
          </div>

          <div class="col-2">
          </div>
        </div>

      </div>
    </footer>
    </div>


</template>

<script>
import { dollars } from './components/filters';

export default {
  name: 'App',
  data(){
    return{
      Productos: [],
    }
  },
  computed: {
    inCart() { return this.$store.getters.inCart; },
    numInCart() { return this.inCart.length; },
    cart() {
      return this.$store.getters.inCart.map((cartItem) => {
        return this.Productos.find((forSaleItem) => {
          return cartItem === forSaleItem._id;
        });
      });
    },
    total() {
      return this.cart.reduce((acc, cur) => acc + cur.price, 0);
    },
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  },
  filters: {
    dollars,
  },
  created() {
    this.getProductos();
  },
  methods: {
    removeFromCart(index) { this.$store.dispatch('removeFromCart', index); },
    getProductos() {
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
  },
};
</script>
