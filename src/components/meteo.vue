<template>
    <div id="meteo_jour">
        <h1>Météo:</h1>
        <label>Entrez le nom d'une ville: <input type="text" v-model="ville.nom"/></label>
        <input type="submit" />
    </div>
</template>
<script>
export default{
  data () {
    return {
      ville: {
        nom: 'Roubaix'
      }
    }
  }
}
</script>
