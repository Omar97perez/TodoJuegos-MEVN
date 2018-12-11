<template>

<div class="row">

  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2>Accesorios más vendidos <b>XBoxOne</b></h2>
      <div id="carouselXBoxOne" class="carousel slide" data-ride="carousel" data-interval="0">
          <!-- Indicador del carousel -->
          <ol class="carousel-indicators">
            <li data-target="#carouselXBoxOne" data-slide-to="0" class="active"></li>
            <li data-target="#carouselXBoxOne" data-slide-to="1"></li>
            <li data-target="#carouselXBoxOne" data-slide-to="2"></li>
          </ol>
          <!-- Objetos del carousel -->
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="item in Productos_XBoxOne"
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

      <h2>Mandos <b>XBoxOne</b></h2>
      <div id="carouselXBoxOne" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselXBoxOne" data-slide-to="0" class="active"></li>
          <li data-target="#carouselXBoxOne" data-slide-to="1"></li>
          <li data-target="#carouselXBoxOne" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
             <Item
                  v-for="item in Productos_XBoxOne_mandos"
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

      <h2>Auriculares <b>XBoxOne</b></h2>
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
              v-for="item in Productos_XBoxOne_cascos"
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

      <h2>Grips mando<b> XBoxOne</b></h2>
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
              v-for="item in Productos_XBoxOne_grips"
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

      <h2>Cargador <b>XBoxOne</b></h2>
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
              v-for="item in Productos_XBoxOne_cargador"
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

      <h2>Volante <b>XBoxOne</b></h2>
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
              v-for="item in Productos_XBoxOne_volantes"
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

      <h2>Cover/Pegatinas <b>XBoxOne</b></h2>
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
              v-for="item in Productos_XBoxOne_cover"
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
        Productos_XBoxOne: [],
        Productos_XBoxOne_mandos : [],
        Productos_XBoxOne_cascos : [],
        Productos_XBoxOne_grips :  [],
        Productos_XBoxOne_cargador :  [],
        Productos_XBoxOne_volantes :  [],
        Productos_XBoxOne_cover : [],
      }
    },
    created() {
      this.getProductos_XBoxOne();

    },
    methods: {
      getProductos_XBoxOne() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_XBoxOne = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio');
            this.Productos_XBoxOne_mandos = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio' && data.categoria == 'mando');
            this.Productos_XBoxOne_cascos = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio' && data.categoria == 'cascos');
            this.Productos_XBoxOne_grips = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio'  && data.categoria == 'grips');
            this.Productos_XBoxOne_cargador = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio' && data.categoria == 'cargador');
            this.Productos_XBoxOne_volantes = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio' && data.categoria == 'volantes');
            this.Productos_XBoxOne_cover = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'accesorio' && data.categoria == 'cover');
          });
      },
    }
  };
</script>
