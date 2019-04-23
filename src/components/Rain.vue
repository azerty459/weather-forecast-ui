<template>
<div class="hot">
  <div>
    <div class="row">
      <div class="center col-sm-10 offset-sm-1">
        <h3>{{message}}</h3><br>
      </div>
    </div>
    <div class="load row" v-if="load">
      <div class="center col-sm-8 offset-sm-4">
        <loader></loader>
      </div>
    </div>
    <div class="row" v-if="success">
      <div class="col-md-4" v-if="one"></div>
      <div class="col-md-2" v-if="two"></div>
      <card v-for="info in infos" :key="info.date" :icon="info.icon_big" :dayLong="info.day_long" :date="info.date" :condition="info.condition" :tempMin="info.tmin" :tempMax="info.tmax"></card>
    </div>
  </div>
</div>
</template>

<script>
import card from './Card.vue'
import loader from './Loader.vue'

export default {
  name: 'Header',
  data () {
    return {
      success: false,
      one: false,
      two: false,
      load: false,
      infos: [],
      message: ''
    }
  },
  components: {
    card, loader
  },
  props: [
    'ville'
  ],
  mounted () {
    this.load = true
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}/rain`).then((response) => {
      this.infos = response.json().then((data) => {
        this.infos = data
        if (this.infos.length > 0) {
          this.load = false
          this.message = `Jours de pluie à venir pour la ville de ${this.capitalize(this.ville)}`
          if (this.infos.length === 1) {
            this.one = true
          }
          if (this.infos.length === 2) {
            this.two = true
          }
          this.success = true
        } else {
          this.load = false
          this.success = false
          this.message = `Aucun jour de pluie n'est à prévoir pour la ville de ${this.capitalize(this.ville)}`
        }
      }, (response) => {
        console.log('erreur', response)
        this.load = false
        this.success = false
        this.message = `Aucun résultat trouvé pour la ville de "${this.capitalize(this.ville)}"`
      })
    }, (response) => {
      console.log('erreur', response)
      this.load = false
      this.success = false
      this.message = `Aucun résultat trouvé pour la ville de "${this.capitalize(this.ville)}"`
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
