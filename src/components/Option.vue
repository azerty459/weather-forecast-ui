<template>
<div class="buttons col-md-8 offset-md-2">
    <button type="submit" @click="humidity" class="btn btn-primary btn-md">humidité</button>
    <button type="submit" @click="hottest" class="btn btn-primary btn-md">Jour le plus chaud</button>
    <button type="submit" @click="rain" class="btn btn-primary btn-md">Jour de pluie</button>
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
button{
    margin-right: 2%;
}
</style>
