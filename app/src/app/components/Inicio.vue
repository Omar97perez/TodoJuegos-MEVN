<template>
<div id="app" class="container fondo-juegos">
      <div class="row">

        <!-- Lista del carrito -->
        <div class="col-md-3">
          <ShoppingCart />
        </div>
        <!-- Final de la lista -->

        <div class="col-md-12">
          <h2>Más vendidos <b>Ps4 pn</b></h2>
          <div id="carouselps4" class="carousel slide" data-ride="carousel" data-interval="0">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselps4" data-slide-to="0" class="active"></li>
              <li data-target="#carouselps4" data-slide-to="1"></li>
              <li data-target="#carouselps4" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="col-md-3">
                <ShoppingCart />
              </div>
              <div class="item carousel-item active">
                <div class="row">
                  <!-- Objetos del carousel-->
                  <Item
                      v-for="item in forSale"
                      :key="item.invId"
                      :invId="item.invId"
                      :name="item.name"
                      :image="item.image"
                      :price="item.price" />
                </div>
              </div>
            </div>
            <!-- Control del carousel -->
            <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
          </div><!-- Final carousel -->

          <h2>Más vendidos <b>PC</b></h2>
          <div id="carouselpc" class="carousel slide" data-ride="carousel" data-interval="0">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselpc" data-slide-to="0" class="active"></li>
              <li data-target="#carouselpc" data-slide-to="1"></li>
              <li data-target="#carouselpc" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->
                </div>
              </div>
            </div>
            <!-- Control del carousel -->
            <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
          </div><!-- Final carousel -->

          <h2>Más vendidos <b>Xbox-One</b></h2>
          <div id="carouselxbox" class="carousel slide" data-ride="carousel" data-interval="0">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselxbox" data-slide-to="0" class="active"></li>
              <li data-target="#carouselxbox" data-slide-to="1"></li>
              <li data-target="#carouselxbox" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                <div class="row">
                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>
                  <!-- Fin de repetir -->

                  <!-- Objetos del carousel [Repetir]-->
                  <div class="col-sm-3">
                    <div class="thumb-wrapper">
                      <div class="img-box">
                        <img src="img/fifa19.jpg" class="img-responsive img-fluid" alt="">
                      </div>
                      <div class="thumb-content">
                        <h4>Fifa 19</h4>
                        <p class="item-price"><strike>59,99€</strike> <span>39.99€</span></p>
                        <div class="star-rating">
                          <ul class="list-inline">
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star"></i></li>
                            <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
                          </ul>
                        </div>
                        <a href="#" @click="addToCart(invId)" class="btn btn-primary">Add to Cart</a>
                      </div>
                    </div>
                  </div>

                  <!-- Control del carousel -->
                  <a class="carousel-control left carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <i class="fa fa-angle-left"></i>
                  </a>
                  <a class="carousel-control right carousel-control-next" href="#myCarousel" data-slide="next">
                    <i class="fa fa-angle-right"></i>
                  </a>
                </div><!-- Final carousel -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Item from './Item.vue';
  import ShoppingCart from './ShoppingCart.vue';

  export default {
    name: 'app',
    computed: {
      forSale() { return this.$store.getters.forSale; },
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      Item,
      ShoppingCart,
    },
  };
</script>
