<template>
</template>
<script>
  export default {
    created(){
      this.$store.dispatch('destroyToken')
      .then(response => {
        this.$router.push({ name: 'Inicio'})
      })
      .catch(error => {
        this.$router.push({ name: 'Inicio'})
        reject(error)
      })
    }
    
  }
</script>