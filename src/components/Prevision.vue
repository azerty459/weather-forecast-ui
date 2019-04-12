<template>
  <div>
    <div v-if="load" class="center">
      <loader/>
    </div>
    <div v-if="info">
      <div class="row">
        <div class="col s12">
          <h2>M&eacute;t&eacute;o de {{city}}</h2>
        </div>
      </div>
      <div class="row">
        <card v-for="i in info" :key="i.date" :icon="i.icon" :day="i.nom" :condition="i.prevision_generale" :max="i.temparature_max" :min="i.temparature_min"/>
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
      info: null,
      city: null,
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
  vue.info = null
  vue.load = true
  // Appel l'api pour recup les resultats
  vue.$resource('meteo/ville/' + ville).get().then(
    (result) => {
      // Si
      vue.load = false
      if (result.body.code === 200) {
        vue.city = ville.charAt(0).toUpperCase() + ville.substring(1).toLowerCase()
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
  vue.info = data.resultat
}

function fail (vue, data) {
  // console.log('Fail')
  vue.messageError = data.message
}
</script>

<style>

</style>
