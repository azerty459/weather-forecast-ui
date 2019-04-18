<template>
<div>
  <div class="humid row">
    <div class="col-sm-8 offset-sm-2" v-if="success">
      <table class="center table table-bordered">
        <tr>
          <th colspan="2"><h4>{{message}}</h4></th>
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
    <div class="center col-sm-10 offset-sm-1" v-if="!success">
      <h3>{{message}}</h3><br>
    </div>
  </div>
  <div class="load row" v-if="load">
    <div class="center col-sm-8 offset-sm-4">
      <loader></loader>
    </div>
  </div>
</div>
</template>

<script>
import loader from './Loader.vue'

export default {
  name: 'Humidity',
  data () {
    return {
      success: false,
      load: false,
      infos: [],
      message: ''
    }
  },
  components: {
    loader
  },
  props: [
    'ville'
  ],
  mounted () {
    this.load = true
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}/humidity`).then((response) => {
      this.infos = response.json().then((data) => {
        this.infos = data
        this.load = false
        this.success = true
        this.message = `Taux d'humidité pour la ville de ${this.capitalize(this.ville)}`
      }, (response) => {
        console.log('erreur', response)
        this.load = false
        this.success = false
        this.message = `Aucun resultat trouvé pour la ville de "${this.capitalize(this.ville)}"`
      })
    }, (response) => {
      console.log('erreur', response)
      this.success = false
      this.load = false
      this.message = `Aucun resultat trouvé pour la ville de "${this.capitalize(this.ville)}"`
    })
  },
  methods: {
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
.humid{
  margin-top: 4%;
}
</style>
