<template>
  <div>
    <div v-if="load" class="center">
      <loader-item/>
    </div>
    <div v-if="info">
      <div class="row">
        <div class="col s12">
          <h2>Humidit&eacute; &agrave; {{city}}</h2>
        </div>
      </div>
      <div class="row">
        <display-card :actual="info.actual" :week="info.weekAverage" :dry="info.dry"/>
      </div>
    </div>
    <div v-if="messageInfo">
      <info-message :message="messageInfo"/>
    </div>
    <div v-if="messageError">
      <error-message :message="messageError"/>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import ErrorMessage from '@/components/message/ErrorMessage.vue'
import InfoMessage from '@/components/message/InfoMessage.vue'
import DisplayCard from '@/components/display/HumidityCard.vue'
import LoaderItem from '@/components/loader/JellyLoader.vue'

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
  props: {
    ville: String
  },
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
    ErrorMessage,
    InfoMessage,
    DisplayCard,
    LoaderItem
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
  vue.$resource('meteo/ville/' + ville + '/humidite').get().then(
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
