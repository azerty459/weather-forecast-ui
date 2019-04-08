<template>
  <div class="hello">

    <p>Entrez le nom de la ville</p>
    <input type="text" v-model="ville"/>
    <input type="button" @click="retrieveData" value="Chercher"/>
    <input type="button" @click="clear" value="Effacer"/>
    
    <div v-if="dataWeather && hotDays && rainsDays && humidityData">
      <h2> Infos sur la météo à <strong>{{getVille()}}</strong></h2>

      <generaldata :dataWeather="dataWeather" :hotDays=hotDays :rainsDays=rainsDays :humidityData=humidityData></generaldata>

    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

import GeneralData from "@/components/GeneralData"
 
Vue.use(VueAxios, axios)

export default {
  name: 'Home',
  data () {
    return {
      ville : "",
      dataWeather : null,
      hotDays : null,
      rainsDays : null,
      humidityData : null
    }
  },
  components: {
    'generaldata' : GeneralData
  },
  methods : {
    retrieveData : function(){
      this.retrieveAllData()
      this.retrieveMostHotDaysData()
      this.retrieveRainDaysData()
      this.retrieveHumidityData()
    },
    retrieveAllData : function(){
        Vue.axios.get("http://localhost:8080/weather/city/"+this.ville).then((response) => {
          this.dataWeather = response.data
        })
    },
    retrieveMostHotDaysData : function(){
        Vue.axios.get("http://localhost:8080/weather/city/"+this.ville+'/forecasts/mosthot').then((response) => {
          this.hotDays = response.data
        })
    },
    retrieveRainDaysData : function(){
        Vue.axios.get("http://localhost:8080/weather/city/"+this.ville+'/forecasts/rain').then((response) => {
          this.rainsDays = response.data
        })
    },
    retrieveHumidityData : function(){
        Vue.axios.get("http://localhost:8080/weather/city/"+this.ville+'/humidity').then((response) => {
          this.humidityData = response.data
        })
    },
    getVille : function(){
      return (' ' + this.ville).slice(1);  
    },
    clear : function(){
      this.dataWeather=null
      this.ville=null
    }
  }
}
</script> 