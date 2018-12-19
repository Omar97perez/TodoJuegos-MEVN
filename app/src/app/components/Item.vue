<template>
  <div class="col-sm-3">
    <div class="thumb-wrapper">

      <div class="img-box">
        <router-link :to="{ name: 'Preview' }"><figure><img :src="image" :alt="name" class="img-responsive img-fluid img-prev" @click="addToPrev(invId)"></figure></router-link>
      </div>

      <div class="thumb-content">
        <h4>{{ name }}</h4>
        <p class="item-price"><strike>{{ price }}€</strike> <span>{{ offer }}€</span></p>
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
</template>

<script>
import { dollars } from './filters';
import preview from './Preview_producto.vue'
// import js from '../../../config/preview';

export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price', 'offer'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
    addToPrev(invId) {
      this.$store.dispatch('addToPrev', invId);     
    },
  },
  // components: {
  //     js,
  // },
};
</script>
