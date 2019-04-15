<template>
  <div>
    <div v-if="load" class="center">
      <loader-item/>
    </div>
    <div v-if="info">
      <div class="row">
        <div class="col s12">
          <h2>M&eacute;t&eacute;o &agrave; {{city}}</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4>Pr&eacute;vision de la semaine</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="i in info" :key="i.date" @click="selectDay(i)" class="pointer" title="Plus d'informations">
          <display-card :icon="i.icon" :day="i.nom" :date="i.date" :condition="i.prevision_generale" :max="i.temparature_max" :min="i.temparature_min"/>
        </div>
      </div>
    </div>
    <div v-if="messageInfo">
      <info-message :message="messageInfo"/>
    </div>
    <div v-if="messageError">
      <error-message :message="messageError"/>
    </div>
    <display-chart/>
  </div>
</template>

<script>
import Vue from 'vue'
import VueResource from 'vue-resource'

import ErrorMessage from '@/components/message/ErrorMessage.vue'
import InfoMessage from '@/components/message/InfoMessage.vue'
import DisplayCard from '@/components/display/ForecastCard.vue'
import DisplayChart from '@/components/display/ForecastChart.vue'
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
  methods: {
    selectDay (info) {
      var dataHumidity = []
      var dataPrecipitation = []
      var dataTemperature = []
      info.hourly.forEach(elt => {
        dataHumidity.push(elt.humidity)
        dataPrecipitation.push(elt.precipitation)
        dataTemperature.push(elt.temperature)
      })
      var chart = [
        {
          label: 'Humidité',
          color: 'rgb(0, 195, 255)',
          data: dataHumidity
        },
        {
          label: 'Precipitation',
          color: 'rgb(45, 196, 0)',
          data: dataPrecipitation
        },
        {
          label: 'Temperature',
          color: 'rgb(255, 108, 0)',
          data: dataTemperature
        }
      ]
      window.bus.$emit('selectDay', {id: info.date, data: chart})
    }
  },
  http: {
    root: 'http://localhost:8080'
  },
  created () {
    if (this.ville != null && this.ville.trim() !== '') {
      callApi(this, this.ville.trim())
    }
    window.bus.$on('newSearch', (ville) => {
      window.bus.$emit('selectDay', null)
      callApi(this, ville)
    })
  },
  components: {
    ErrorMessage,
    InfoMessage,
    DisplayCard,
    DisplayChart,
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
