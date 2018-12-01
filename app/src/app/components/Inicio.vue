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
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
  import js from './store';
  import Item from './Item.vue';
  import ShoppingCart from './ShoppingCart.vue';

  export default {
    name: 'app',
    computed: {
      forSale() { return this.$store.getters.forSale; },
      inCart() { return this.$store.getters.inCart; },
    },
    components: {
      js,
      Item,
      ShoppingCart,
    },
  };
</script>
