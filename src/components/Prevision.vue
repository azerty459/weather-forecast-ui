<template>
    <div>
        <div v-if="city">
          <div class="row">
            <div class="col s12">
              <h2>Météo de {{cityName}}</h2>
            </div>
          </div>
          <div class="row">
            <card v-for="c in city" :key="c.date" :icon="c.icon" :day="c.nom" :condition="c.prevision_generale" :max="c.temparature_max" :min="c.temparature_min"/>
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

Vue.use(VueResource)

export default{
  data () {
    return {
      city: null,
      cityName: null,
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
      console.log('ici')
      callApi(this, this.ville.trim())
    }
    window.bus.$on('newSearch', (ville) => {
      callApi(this, ville)
    })
  },
  components: {
    error,
    info,
    card
  }
}

function callApi (vue, ville) {
  // Indique le chargement
  vue.messageInfo = 'Chargement...'
  // Appel l'api pour recup les resultats
  vue.$resource('meteo/ville/' + ville).get().then(
    (result) => {
      // Si
      vue.messageInfo = null
      if (result.body.code === 200) {
        vue.cityName = ville
        success(vue, result.body)
      } else {
        fail(vue, result.body)
      }
    }, (result) => {
      // Sinon
      console.log('Error')
      vue.messageInfo = null
      vue.messageError = 'Impossible de contacter le serveur'
      vue.city = null
    }
  )
}

function success (vue, data) {
  console.log('Succes')
  console.log(data)
  vue.city = data.resultat
  vue.messageError = null
}

function fail (vue, data) {
  console.log('Fail')
  vue.city = null
  vue.messageError = data.message
}
</script>

<style>

</style>
