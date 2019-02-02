<template>
    <div class="row">
        <div class="col-md-3">
            <ShoppingCart />
        </div>

        <div class="col-md-12">

        <!-- Inicio del cartel del producto -->

        <div class="card">

            <div class="left">

            </div>

            <div class="right">

                <img class="prod-img" :src="prev.foto">

                <h1>{{prev.titulo}}</h1>
                <h2>{{prev.precio}}€</h2>

                <div class="detail row">
                  <p class="col-2"></p>
                    <p class="col-8">{{prev.descripcion}}</p>
                </div>

                <button  @click="addToCart(prev._id)">ADD TO CART</button>
            </div>

        </div>

        <!-- Fin del cartel de producto-->

        </div>

    </div>
</template>

<script>

import ShoppingCart from './ShoppingCart.vue';

export default {
  name: 'Preview',
  data(){
      return{
          preview: '',
          Producto: [],
          Productos: [],
      }
  },
  created() {
      this.getProductos();
  },
  props: ['invId', 'name', 'image', 'price', 'offer'],
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
    getProductos() {
      fetch('/api/TodoJuegos/Producto/')
        .then(res => res.json())
        .then(data => {
          this.Productos = data;
        });
    },
  },
  components: {
    ShoppingCart,
  },
  computed: {
    previewId() { return this.$store.getters.preview; },
    prev(){
        return this.Productos.find((PrevItem) =>{
            return PrevItem._id === this.$store.getters.preview;
        });
    },
  },
};
</script>
