<template>
<div class="row">
<div class="col-sm-8 offset-sm-2" v-if="success">
  <table class="center table table-bordered">
    <tr>
      <th colspan="2">{{message}}{{ville | capitalize}}</th>
    </tr>
    <tr>
      <td class="cell">Humidité actuelle:</td>
      <td>{{this.infos.current_humidity}} %</td>
    </tr>
    <tr>
      <td class="cell">Humidité moyenne:</td>
      <td>{{this.infos.average_humidity}} %</td>
    </tr>
  </table>
</div>
<div class="title result" v-if="!success">
  <h1>{{message}}</h1>
</div>
</div>
</template>

<script>
export default {
  name: 'Humidity',
  data () {
    return {
      success: false,
      infos: [],
      message: ''
    }
  },
  props: [
    'ville'
  ],
  mounted () {
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}/humidity`).then((response) => {
      console.log('erreurTest', response)
      this.infos = response.json().then((data) => {
        this.infos = data
        this.success = true
        this.message = 'Humidité moyenne des 5 jours à venir pour la ville de '
      }, (response) => {
        console.log('aaaaaaeeeeeerreur', response)
        this.success = false
      })
    }, (response) => {
      console.log('eeeeeerreur', response)
      this.success = false
      this.message = `Aucun resultat pour la ville de "${this.ville}"`
    })
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  }
}
</script>

<style scoped>
.center{
  text-align: center;
}
.cell{
  width: 50%;
}
</style>
