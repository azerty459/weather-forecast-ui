<template>
  <div>
    <div v-if="load" class="center">
      <loader/>
    </div>
    <div v-if="city">
      <div class="row">
        <div class="col s12">
          <h2>Jour le plus chaud &agrave; {{cityName}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s11 m12 offset-m4">
          <div class="row">
            <card :icon="city.icon" :day="city.nom" :condition="city.prevision_generale" :max="city.temparature_max" :min="city.temparature_min"/>
          </div>
        </div>
      </div>
    </div>
    <div v-if="messageInfo">
      <info :message="messageInfo"/>
    </div>
    <div v-if="messageError">
      <error :message="messageError"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import error from '@/components/message/Error.vue'
import info from '@/components/message/Info.vue'
import card from '@/components/display/ForecastCard.vue'
import loader from '@/components/loader/Circular.vue'

Vue.use(VueResource)

export default{
  data () {
    return {
      city: null,
      cityName: null,
      load: false,
      messageError: null,
      messageInfo: null
    }
  },
  props: ['ville'],
  http: {
    root: 'http://localhost:8080'
  },
  created () {
    if (this.ville != null && this.ville.trim() !== '') {
      callApi(this, this.ville.trim())
    }
    window.bus.$on('newSearch', (ville) => {
      callApi(this, ville)
    })
  },
  components: {
    error,
    info,
    card,
    loader
  }
}

function callApi (vue, ville) {
  if (ville.trim() === '') {
    return false
  }
  // Indique le chargement
  vue.messageError = null
  vue.city = null
  vue.load = true
  // Appel l'api pour recup les resultats
  vue.$resource('meteo/ville/' + ville + '/chaleur').get().then(
    (result) => {
      // Si
      vue.load = false
      if (result.body.code === 200) {
        vue.cityName = ville.charAt(0).toUpperCase() + ville.substring(1).toLowerCase()
        success(vue, result.body)
      } else {
        fail(vue, result.body)
      }
    }, (result) => {
      // Sinon
      // console.log('Error')
      vue.load = false
      vue.messageError = 'Impossible de contacter le serveur'
    }
  )
}

function success (vue, data) {
  // console.log('Succes')
  vue.city = data.resultat
}

function fail (vue, data) {
  // console.log('Fail')
  vue.messageError = data.message
}
</script>

<style>

</style>
