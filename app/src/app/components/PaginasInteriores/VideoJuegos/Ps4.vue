<template>

<div class="row">

  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2>Más vendidos <b>Ps4</b></h2>
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
                  v-for="item in Productos_Ps4"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
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

      <h2>Juegos de <b>acción</b></h2>
      <div id="carouselPs4" class="carousel slide" data-ride="carousel" data-interval="0">
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
                  v-for="item in Productos_Ps4_accion"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
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

      <h2>Juegos de <b>aventura</b></h2>
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
              v-for="item in Productos_Ps4_aventura"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
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

      <h2>Juegos de <b>deporte</b></h2>
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
              v-for="item in Productos_Ps4_deporte"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
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

      <h2>Juegos de <b>conducción</b></h2>
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
              v-for="item in Productos_Ps4_conduccion"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
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

      <h2>Juegos de <b>estratégia</b></h2>
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
              v-for="item in Productos_Ps4_estrategia"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
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
  <!-- Fin Página de Juegos -->
</div>

</template>

<script>
  import js from '../../store';
  import Item from '../../Item.vue';
  import ShoppingCart from '../../ShoppingCart.vue';

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
        Productos_Ps4_accion: [],
        Productos_Ps4_aventura: [],
        Productos_Ps4_deporte: [],
        Productos_Ps4_conduccion: [],
        Productos_Ps4_estrategia: [],
        Productos_Ps4_rpg: [],
      }
    },
    created() {
      this.getProductos_Ps4();

    },
    methods: {
      getProductos_Ps4() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Ps4 = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego');
            this.Productos_Ps4_accion = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'Acción');
            this.Productos_Ps4_aventura = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'Aventura');
            this.Productos_Ps4_deporte = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'Deportes');
            this.Productos_Ps4_conduccion = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'Conducción');
            this.Productos_Ps4_estrategia = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'Estrategia');
            this.Productos_Ps4_rpg = data.filter(data => data.plataforma == 'Ps4' && data.tipo == 'videojuego' && data.categoria == 'RPG');
          });
      },
    }
  };
</script>
