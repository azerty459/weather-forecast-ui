<template>
<div class="hot">
  <div>
    <div class="row">
      <div class="center col-sm-10 offset-sm-1">
        <h3>{{message}}</h3><br>
      </div>
    </div>
    <div class="row" v-if="success">
      <card v-for="info in infos.listOfDays" :key="info.date" :icon="info.icon_big" :dayLong="info.day_long" :date="info.date" :condition="info.condition" :tempMin="info.tmin" :tempMax="info.tmax"></card>
    </div>
  </div>
</div>
</template>

<script>
import card from './Card.vue'

export default {
  name: 'Header',
  data () {
    return {
      success: false,
      infos: [],
      message: ''
    }
  },
  components: {
    card
  },
  props: [
    'ville'
  ],
  mounted () {
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}`).then((response) => {
      this.infos = response.json().then((data) => {
        this.infos = data
          this.success = true
          this.message = `Prévision à 5 jours pour la ville de ${this.capitalize(this.ville)}`
      }, (response) => {
        console.log('eerreur', response)
        this.success = false
        this.message = `Aucun resultat trouvé pour la ville de "${this.capitalize(this.ville)}"`
      })
    }, (response) => {
      console.log('erreur', response)
      this.success = false
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

<style>
</style>
