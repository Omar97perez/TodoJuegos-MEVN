<template>

<div class="row">

  <!-- Lista del carrito -->
  <div class="col-md-3">
    <ShoppingCart />
  </div>
  <!-- Final de la lista -->

  <!-- Página de juegos -->
  <div class="col-md-12">
      <h2>Más vendidos <b>Pc</b></h2>
      <div id="carouselPc" class="carousel slide" data-ride="carousel" data-interval="0">
          <!-- Indicador del carousel -->
          <ol class="carousel-indicators">
            <li data-target="#carouselPc" data-slide-to="0" class="active"></li>
            <li data-target="#carouselPc" data-slide-to="1"></li>
            <li data-target="#carouselPc" data-slide-to="2"></li>
          </ol>
          <!-- Objetos del carousel -->
          <div class="carousel-inner">
            <div class="item carousel-item active">
              <div class="row">
                <!-- Objetos del carousel-->
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

            <div class="item carousel-item" v-for="a, index in Productos_Pc" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_Pc.slice(index, index+4)"
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
          <a class="carousel-control left carousel-control-prev" href="#carouselPc" data-slide="prev">
            <i class="fa fa-angle-left"></i>
          </a>
          <a class="carousel-control right carousel-control-next" href="#carouselPc" data-slide="next">
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
                  v-for="item in Productos_Pc_accion.slice(0,4)"
                  :key="item._id"
                  :invId="item._id"
                  :name="item.titulo"
                  :image="item.foto"
                  :price="item.precio"
                  :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_accion" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_Pc_accion.slice(index, index+4)"
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
      <div id="carouselav" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselav" data-slide-to="0" class="active"></li>
          <li data-target="#carouselav" data-slide-to="1"></li>
          <li data-target="#carouselav" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_Pc_aventura.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_aventura" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_Pc_aventura.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselav" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselav" data-slide="next">
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
              v-for="item in Productos_Pc_deporte.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_deporte" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_Pc_deporte.slice(index, index+4)"
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
          <li data-target="#carouselcond" data-slide-to="1"></li>videojuego
          <li data-target="#carouselcond" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_Pc_conduccion.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_conduccion" v-if="index % 4 == 0 && index > 3">
              <div class="row">
                <!-- Objetos del carousel-->
                <Item
                  v-for="(item, index) in Productos_Pc_conduccion.slice(index, index+4)"
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
      <div id="carouselestra" class="carousel slide" data-ride="carousel" data-interval="0">
        <!-- Indicador del carousel -->
        <ol class="carousel-indicators">
          <li data-target="#carouselestra" data-slide-to="0" class="active"></li>
          <li data-target="#carouselestra" data-slide-to="1"></li>
          <li data-target="#carouselestra" data-slide-to="2"></li>
        </ol>
        <!-- Objetos del carousel -->
        <div class="carousel-inner">
          <div class="item carousel-item active">
            <div class="row">
              <Item
              v-for="item in Productos_Pc_estrategia.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_estrategia" v-if="index % 4 == 0 && index > 3">
            <div class="row">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_Pc_estrategia.slice(index, index+4)"
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
        <a class="carousel-control left carousel-control-prev" href="#carouselestra" data-slide="prev">
          <i class="fa fa-angle-left"></i>
        </a>
        <a class="carousel-control right carousel-control-next" href="#carouselestra" data-slide="next">
          <i class="fa fa-angle-right"></i>
        </a>
      </div><!-- Final carousel -->

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
              v-for="item in Productos_Pc_rpg.slice(0,4)"
              :key="item._id"
              :invId="item._id"
              :name="item.titulo"
              :image="item.foto"
              :price="item.precio"
              :offer="item.oferta"/>
            </div>
          </div>

          <div class="item carousel-item" v-for="a, index in Productos_Pc_rpg" v-if="index % 4 == 0 && index > 3">
            <div class="row">
              <!-- Objetos del carousel-->
              <Item
                v-for="(item, index) in Productos_Pc_rpg.slice(index, index+4)"
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
        Productos_Pc: [],
        Productos_Pc_accion: [],
        Productos_Pc_aventura: [],
        Productos_Pc_deporte: [],
        Productos_Pc_conduccion: [],
        Productos_Pc_estrategia: [],
        Productos_Pc_rpg: [],
      }
    },
    created() {
      this.getProductos_Pc();

    },
    methods: {
      getProductos_Pc() {
        fetch('/api/TodoJuegos/Producto/')
          .then(res => res.json())
          .then(data => {
            this.Productos_Pc = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego');
            this.Productos_Pc_accion = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego' && data.categoria == 'Acción');
            this.Productos_Pc_aventura = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego' && data.categoria == 'Aventura');
            this.Productos_Pc_deporte = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego' && data.categoria == 'Deportes');
            this.Productos_Pc_conduccion = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego' && data.categoria == 'Conducción');
            this.Productos_Pc_estrategia = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'videojuego' && data.categoria == 'Estrategia');
            this.Productos_Pc_rpg = data.filter(data => data.plataforma == 'Pc' && data.tipo == 'Videojuego' && data.categoria == 'RPG');
          });
      },
    }
  };
</script>
