<template>
<div class="buttons col-md-8 offset-md-2">
  <router-link :to="`/meteo/${this.ville}`" class="btn btn-primary btn-md">Prévision</router-link>
  <router-link :to="`/meteo/${this.ville}/humidity`" class="btn btn-primary btn-md">humidité</router-link>
  <router-link :to="`/meteo/${this.ville}/rain`" class="btn btn-primary btn-md">Jours de pluie</router-link>
  <router-link :to="`/meteo/${this.ville}/hottest`" class="btn btn-primary btn-md">Jour le plus chaud</router-link>
</div>
</template>

<script>
export default {
  name: 'Option',
  props: [
    'ville'
  ]
}
</script>

<style scoped>
.buttons{
   text-align: center;
}
.btn{
  margin-right: 1%;
}
</style>
