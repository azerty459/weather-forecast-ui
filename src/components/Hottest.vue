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
  </div>
</div>
</template>

<script>
import card from './Card.vue'

export default {
  name: 'Hottest',
  data () {
    return {
      success: false,
      infos: '',
      message: ''
    }
  },
  components: {
    card
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
    this.$http.get(`http://127.0.0.1:8080/meteo/${this.ville}/hottest`).then((response) => {
      this.infos = response.json().then((data) => {
        this.infos = data
        if (this.infos.day !== null) {
          this.success = true
          this.message = `${this.infos.day} ${this.infos.date} est la journée la plus chaude à ${this.capitalize(this.ville)}`
        }
      }, (response) => {
        console.log('erreur', response)
        this.success = false
        this.message = `Aucun resultat pour la ville de "${this.capitalize(this.ville)}"`
      })
    }, (response) => {
      console.log('erreur', response)
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
