<template>

<div class="row">


  <!-- Publicidad -->

  <div class="col-md-12">
    <div id="carouselpubli" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselpubli" data-slide-to="0" class="active"></li>
        <li data-target="#carouselpubli" data-slide-to="1"></li>
        <li data-target="#carouselpubli" data-slide-to="2"></li>
      </ol>

      <div class="carousel-inner">
        <div class="item carousel-item active">
          <img src="https://i.imgur.com/9vo5bZf.jpg">            
        </div>

        <div class="item carousel-item">
          <img src="http://gamerselite.com/wp-content/uploads/2017/11/call-of-duty-ww2-banner.jpg">            
        </div>

        <div class="item carousel-item ">
          <img src="https://www.gamersrd.com/wp-content/uploads/2016/09/ZELDA-AMAZON-GAMERSRD.jpg">            
        </div>


        <a class="carousel-control left carousel-control-prev" href="#carouselpubli" data-slide="prev" style="background-color: transparent;">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselpubli" data-slide="next" style="background-color: transparent;">
          <i class="fa fa-angle-right"></i>
        </a>

      </div>

    </div>
  </div>

  <!-- Fin publicidad -->


  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2>Más vendidos <b>Ps4</b></h2>
        <div id="carouselps4" class="carousel slide" data-ride="carousel">
            <!-- Indicador del carousel -->
            <ol class="carousel-indicators">
              <li data-target="#carouselps4" data-slide-to="0" class="active"></li>
              <li data-target="#carouselps4" data-slide-to="1"></li>
              <li data-target="#carouselps4" data-slide-to="2"></li>
            </ol>
            <!-- Objetos del carousel -->
            <div class="carousel-inner">
              <div class="item carousel-item active">
                  <!-- Objetos del carousel-->
                  <Item
                    v-for="item in Productos_Ps4.slice(0,4)"
                    :key="item._id"
                    :invId="item._id"
                    :name="item.titulo"
                    :image="item.foto"
                    :price="item.precio"
                    :offer="item.oferta"/>
              </div>

              <div class="item carousel-item">
                  <!-- Objetos del carousel-->
                  <Item
                    v-for="(item, index) in Productos_Ps4" aux="index" v-if="index >= 4"
                    :key="item._id"
                    :invId="item._id"
                    :name="item.titulo"
                    :image="item.foto"
                    :price="item.precio"
                    :offer="item.oferta"/>
              </div>

              <div class="item carousel-item">
                  <!-- Objetos del carousel-->
                  <Item
                    v-for="(item, index) in Productos_Ps4" aux="index" v-if="index >= 8"
                    :key="item._id"
                    :invId="item._id"
                    :name="item.titulo"
                    :image="item.foto"
                    :price="item.precio"
                    :offer="item.oferta"/>
              </div>

            </div>
            <!-- Control del carousel -->
            <a class="carousel-control left carousel-control-prev" href="#carouselps4" data-slide="prev">
              <i class="fa fa-angle-left"></i>
            </a>
            <a class="carousel-control right carousel-control-next" href="#carouselps4" data-slide="next">
              <i class="fa fa-angle-right"></i>
            </a>
        </div>

      <!-- Final carousel -->

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
                  v-for="item in Productos_Pc.slice(0,4)"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_Pc" aux="index" v-if="index >= 4"
                :key="item._id"
                :invId="item._id"
                :name="item.titulo"
                :image="item.foto"
                :price="item.precio"
                :offer="item.oferta"/>
          </div>

          <div class="item carousel-item">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_Pc" aux="index" v-if="index >= 8"
                :key="item._id"
                :invId="item._id"
                :name="item.titulo"
                :image="item.foto"
                :price="item.precio"
                :offer="item.oferta"/>
          </div>

        </div>
        <!-- Control del carousel -->
        <a class="carousel-control left carousel-control-prev" href="#carouselpc" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselpc" data-slide="next">
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
              v-for="item in Productos_XBoxOne.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_XBoxOne" aux="index" v-if="index >= 4"
                :key="item._id"
                :invId="item._id"
                :name="item.titulo"
                :image="item.foto"
                :price="item.precio"
                :offer="item.oferta"/>
          </div>

          <div class="item carousel-item">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_XBoxOne" aux="index" v-if="index >= 8"
                :key="item._id"
                :invId="item._id"
                :name="item.titulo"
                :image="item.foto"
                :price="item.precio"
                :offer="item.oferta"/>
          </div>

        </div>

        <!-- Control del carousel -->
        <a class="carousel-control left carousel-control-prev" href="#carouselxbox" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselxbox" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->
  </div>
  <!-- Fin Página de Juegos -->
</div>

</template>

<script>
  import js from './store';
  import Item from './Item.vue';
  import ShoppingCart from './ShoppingCart.vue';
  import { Carousel, Slide } from 'vue-carousel';

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
    data() {
      return {
        Productos_Ps4: [],
        Productos_XBoxOne: [],
        Productos_Pc: [],
      }
    },
    created() {
      this.getProductos_Ps4();
      this.getProductos_XBoxOne();
      this.getProductos_Pc();
    },
    methods: {
      getProductos_Ps4() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Ps4 = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego');
          });
      },
      getProductos_XBoxOne() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_XBoxOne = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego');
          });
      },
      getProductos_Pc() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Pc = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego');
          });
      },
      inc_sliderPS4(indexPS4){

      }
    },
  };
</script>
