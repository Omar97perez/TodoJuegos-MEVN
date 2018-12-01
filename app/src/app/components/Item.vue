<template>
  <div class="col-sm-3">
    <div class="thumb-wrapper">
      <div class="img-box">
        <img :src="image" :alt="name" class="img-responsive img-fluid">
      </div>
      <div class="thumb-content">
        <h4>{{ name }}</h4>
        <p class="item-price"><strike>59,99€</strike> <span>{{ price | dollars }}</span></p>
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

export default {
  name: 'item',
  props: ['invId', 'name', 'image', 'price'],
  filters: {
    dollars,
  },
  methods: {
    addToCart(invId) {
      this.$store.dispatch('addToCart', invId);
    },
  },
};
</script>
