<template>
<div class="buttons col-md-8 offset-md-2">
  <router-link :to="'/meteo/lille/humidity'" class="btn btn-primary btn-md">humidité</router-link>
  <router-link :to="'/meteo/lille/humidity'" class="btn btn-primary btn-md">Jour le plus chaud</router-link>
  <router-link :to="'/meteo/lille/humidity'" class="btn btn-primary btn-md">Jours de pluie</router-link>
</div>
</template>

<script>
export default {
  name: 'Option'
}
</script>

<style scoped>
.buttons{
   text-align: center;
}
</style>
