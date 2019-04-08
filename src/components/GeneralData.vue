<template>
    <div>
        <div>
            <h2>Météo actuelle ({{dataWeather.currentCondition.hour}})</h2>
                <current-weather :currentCondition=dataWeather.currentCondition :cityInfo=dataWeather.cityInfo></current-weather>
            <h2>Previsions</h2>
            
            <forecast-array :forecasts=dataWeather.forecasts></forecast-array>
        </div>

        <div>
            <h2>Les jours les plus chauds de la semaine</h2>
            <forecast-array :forecasts=[hotDays]></forecast-array>
        </div>

        <div>
            <h2>Les jours de pluie de la semaine</h2>
            <forecast-array :forecasts=rainsDays></forecast-array>
        </div>

        <div>
            <h2>Infos humidité</h2>
            <ul>
                <li>Humidité actuelle : {{humidityData.currentHumidity}}%</li>
                <li>Humidité moyenne de la semaine : {{humidityData.weekAvgHumidity}}%</li>
            </ul>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import ForecastArray from "@/components/ForecastArray"
import CurrentDataWeather from "@/components/CurrentDataWeather"

Vue.use(VueAxios, axios)

export default {
  name: 'Home',
  data () {
    return {}
  },
  components : {
      'forecast-array' : ForecastArray,
      'current-weather' : CurrentDataWeather
  },
  props: {
      dataWeather : Object,
      hotDays : Object,
      rainsDays : Array,
      humidityData : Object
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 14px;
  color: #444;
}

table {
  border: 2px solid #42b983;
  border-radius: 3px;
  background-color: #fff;
}

th {
  background-color: #42b983;
  color: rgba(255,255,255,0.66);
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

td {
  background-color: #f9f9f9;
}

th, td {
  min-width: 120px;
  padding: 10px 20px;
}

</style>