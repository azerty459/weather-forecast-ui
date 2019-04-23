<template>
<div class="hot">
  <div>
    <div class="row">
      <div class="center col-sm-10 offset-sm-1">
      <h3>{{message}}</h3><br>
      </div>
    </div>
    <div class="row" v-if="success">
      <div class="col-md-4"></div>
      <card :icon="infos.icon" :dayLong="infos.day" :condition="infos.condition" :tempMin="infos.temperatureMin" :tempMax="infos.temperatureMax"></card>
    </div>
    <div class="load row" v-if="load">
      <div class="center col-sm-8 offset-sm-4">
        <loader></loader>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import card from './Card.vue'
import loader from './Loader.vue'

export default {
  name: 'Hottest',
  data () {
    return {
      success: false,
      load: false,
      infos: '',
      message: ''
    }
  },
  components: {
    card, loader
  },
  props: [
    'ville'
  ],
  methods: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  },
  mounted () {
    this.load = true
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}/hottest`).then((response) => {
      this.infos = response.json().then((data) => {
        this.infos = data
        this.load = false
        this.success = true
        this.message = `${this.infos.day} ${this.infos.date} sera la journée la plus chaude à ${this.capitalize(this.ville)}`
      }, (response) => {
        console.log('erreur', response)
        this.load = false
        this.success = false
        this.message = `Aucun resultat pour la ville de "${this.capitalize(this.ville)}"`
      })
    }, (response) => {
      console.log('erreur', response)
      this.load = false
      this.success = false
      this.message = `Aucun resultat pour la ville de "${this.capitalize(this.ville)}"`
    })
  }
}
</script>

<style>
.hot{
    margin-top: 4%;
}
</style>
