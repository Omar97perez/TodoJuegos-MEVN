<template>
    <div class="row">
        <div class="col-md-3">
            <ShoppingCart />
        </div>

        <div class="col-md-12">

        </div>
        
    </div>
</template>

<script>

export default {
  name: 'Preview',
  props: ['invId', 'name', 'image', 'price', 'offer'],
  methods: {
  },
};
</script>