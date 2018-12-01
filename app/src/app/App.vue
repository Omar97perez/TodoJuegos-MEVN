<template>

    <div style="background-color: #fb6207;">
      <header>
          <div class="container" >
                      <div class="row">
                        <div class="col-md-12 fondo-juegos">
                          <nav class="navbar navbar-expand-lg justify-content-between">
                                <a href="Inicio.html">
                                  <router-link :to="{ name: 'Inicio' }" class="nav-link"><img src="img/Logotipo.png" alt="Logotipo" class="logo"></router-link>
                                </a>
                                <form class="form-inline">
                                  <input class="form-control mr-sm-2 " type="search" placeholder="Buscar" aria-label="Search">
                                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Buscar</button>
                                </form>
                                <i>
                                  <router-link :to="{ name: 'Login' }"><i class="fa fa-user col-md-5" style="font-size:24px"></i></router-link>
                                  <router-link :to="{ name: 'Carrito' }"><i class="fa fa-shopping-cart col-md-5" style="font-size:24px"></i></router-link>
                                </i>
                          </nav>

                          <nav class="navbar navbar-expand-lg justify-content-between" style="margin-right:-26px;margin-left:-26px;margin-top:-31px;">
                                <div class="collapse navbar-collapse" id="navbarNavDropdown"  style="background-color:#434343">
                                  <ul class="navbar-nav">
                                    <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">VideoJuegos</a>
                                      <div class="dropdown-menu" aria-labelledby>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Pc' }" class="nav-link">Pc</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Ps4' }" class="nav-link">Ps4</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'XboxOne' }" class="nav-link">XboxOne</router-link></a>
                                      </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accesorios</a>
                                      <div class="dropdown-menu" aria-labelledby>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Pc' }" class="nav-link">Pc</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Ps4' }" class="nav-link">Ps4</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'XboxOne' }" class="nav-link">XboxOne</router-link></a>
                                      </div>
                                    </li>
                                    <li class="nav-item dropdown">
                                      <a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Seminuevos</a>
                                      <div class="dropdown-menu" aria-labelledby>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Pc' }" class="nav-link">Pc</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'Ps4' }" class="nav-link">Ps4</router-link></a>
                                        <a class="dropdown-item" ><router-link :to="{ name: 'XboxOne' }" class="nav-link">XboxOne</router-link></a>
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
                                    <li class="nav-item active">
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
