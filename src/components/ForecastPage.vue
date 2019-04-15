<template>
  <div>
    <div v-if="load" class="center">
      <loader-item/>
    </div>
    <div v-if="info">
      <div class="row">
        <div class="col s12">
          <h2>M&eacute;t&eacute;o &agrave; {{city}} ({{info.country}})</h2>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4>M&eacute;t&eacute;o actuelle</h4>
        </div>
      </div>
      <div class="row">
        <div class="col s12 center">
          <img class="current-img" :src="info.icon">
        </div>
      </div>
      <div class="row">
        <div class="col s12 m6 l4 offset-m3 offset-l4">
          <ul class="collection">
            <li class="collection-item">
              <strong>Conditions</strong> : {{info.condition}}
            </li>
            <li class="collection-item">
              <strong>Lever du soleil</strong> : {{info.sunrise}}
            </li>
            <li class="collection-item">
              <strong>Coucher du soleil</strong> : {{info.sunset}}
            </li>
            <li class="collection-item">
              <strong>Temp&eacute;rature</strong> : {{info.temperature}} &deg;C
            </li>
            <li class="collection-item">
              <strong>Vent</strong> : {{info.wind_speed}} km/h direction {{info.wind_direction}}
            </li>
            <li class="collection-item">
              <strong>Pression</strong> : {{info.pressure}} hPa
            </li>
            <li class="collection-item">
              <strong>Humidit&eacute;</strong> : {{info.humidity}} &percnt;
            </li>
          </ul>
        </div>
      </div>
      <div class="row">
        <div class="col s12">
          <h4>Pr&eacute;vision de la semaine</h4>
        </div>
      </div>
      <div class="row">
        <div v-for="day in info.days" :key="day.date" @click="selectDay(day)" class="pointer" title="Plus d'informations">
          <display-card :icon="day.icon" :day="day.nom" :date="day.date" :condition="day.prevision_generale" :max="day.temparature_max" :min="day.temparature_min"/>
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

<style scoped>
.current-img {
  min-width: 200px;
  min-height: 200px;
}
</style>
