<template>

<div class="row">

  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2>Más vendidos <b>XBoxOne</b></h2>
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

            <div class="item carousel-item" v-for="a, index in Productos_XBoxOne" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne.slice(index, index+4)"
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
          <a class="carousel-control left carousel-control-prev" href="#carouselXBoxOne" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control right carousel-control-next" href="#carouselXBoxOne" data-slide="next">
            <i class="fa fa-angle-right"></i>
          </a>
      </div><!-- Final carousel -->

      <h2>Juegos de <b>acción</b></h2>
      <div id="carouselacc" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselacc" data-slide-to="0" class="active"></li>
          <li data-target="#carouselacc" data-slide-to="1"></li>
          <li data-target="#carouselacc" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
             <Item
                  v-for="item in Productos_XBoxOne_accion"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_accion" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_accion.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselacc" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselacc" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

      <h2>Juegos de <b>aventura</b></h2>
      <div id="carouselacc" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselacc" data-slide-to="0" class="active"></li>
          <li data-target="#carouselacc" data-slide-to="1"></li>
          <li data-target="#carouselacc" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne_aventura"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_aventura" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_aventura.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselacc" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselacc" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

      <h2>Juegos de <b>deporte</b></h2>
      <div id="carouseldep" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouseldep" data-slide-to="0" class="active"></li>
          <li data-target="#carouseldep" data-slide-to="1"></li>
          <li data-target="#carouseldep" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne_deporte"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_deporte" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_deporte.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouseldep" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouseldep" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

      <h2>Juegos de <b>conducción</b></h2>
      <div id="carouselcond" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselcond" data-slide-to="0" class="active"></li>
          <li data-target="#carouselcond" data-slide-to="1"></li>
          <li data-target="#carouselcond" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne_conduccion"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_conduccion" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_conduccion.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselcond" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselcond" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

      <h2>Juegos de <b>estratégia</b></h2>
      <div id="carouselest" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselest" data-slide-to="0" class="active"></li>
          <li data-target="#carouselest" data-slide-to="1"></li>
          <li data-target="#carouselest" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne_estrategia"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_estrategia" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_estrategia.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselest" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselest" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

<<<<<<< HEAD
      <h2>Juegos de <b>rpg</b></h2>
      <div id="carouselrpg" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselrpg" data-slide-to="0" class="active"></li>
          <li data-target="#carouselrpg" data-slide-to="1"></li>
          <li data-target="#carouselrpg" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_XBoxOne_rpg"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_XBoxOne_rpg" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_XBoxOne_rpg.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselrpg" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselrpg" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->
=======
>>>>>>> CorrecionErrores
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
        Productos_XBoxOne_accion: [],
        Productos_XBoxOne_aventura: [],
        Productos_XBoxOne_deporte: [],
        Productos_XBoxOne_conduccion: [],
        Productos_XBoxOne_estrategia: [],
        Productos_XBoxOne_rpg: [],
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
            this.Productos_XBoxOne = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego');
            this.Productos_XBoxOne_accion = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'Acción');
            this.Productos_XBoxOne_aventura = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'Aventura');
            this.Productos_XBoxOne_deporte = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'Deportes');
            this.Productos_XBoxOne_conduccion = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'Conducción');
            this.Productos_XBoxOne_estrategia = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'Estrategia');
            this.Productos_XBoxOne_rpg = data.filter(data => data.plataforma == 'XBoxOne' && data.tipo == 'videojuego' && data.categoria == 'RPG');
          });
      },
    }
  };
</script>
