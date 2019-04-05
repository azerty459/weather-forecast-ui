<template>
  <div class="hello">

    <p>Entrez le nom de la ville</p>
    <input type="text" v-model="ville"/>
    <input type="button" @click="retrieveData" value="Chercher"/>
    <input type="button" @click="clear" value="Effacer"/>
    
    <div v-if="dataWeather">
      <h1>Données Météo</h1>
      <h2> Infos sur la météo de <strong>{{dataWeather.cityInfo.nomLocalite}}</strong></h2>

      <h2>Météo actuelle ({{dataWeather.currentCondition.hour}})</h2>
      <ul>
        <li>Humidité : {{dataWeather.currentCondition.humidity}}</li>
        <li>Conditions : {{dataWeather.currentCondition.condition}}</li>
        <li>Temperature : {{dataWeather.currentCondition.temperature}}°</li>
      </ul>
      <h2>Previsions</h2>

      <table>
        <thead>
          <tr>
          <td>Date</td>
          <td>Température min </td  >
          <td>Température max </td>
          <td>Libelle condition</td>
        </tr>  
        </thead>
        <tr v-for="(forecast,index) in dataWeather.forecasts" :key="index">
          <td>{{forecast.jourSemaine}}</td>
          <td>{{forecast.tempMin}}°</td  >
          <td>{{forecast.tempMax}}°</td>
          <td>{{forecast.condition}}</td>
        </tr>
      </table>
      
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
 
Vue.use(VueAxios, axios)

export default {
  name: 'Home',
  data () {
    return {
      dataWeather : null,
      ville : ""
    }
  },
  beforeMount(){
    this.retrieveData()
  },
  methods : {
    retrieveData : function(){
        Vue.axios.get("http://localhost:8080/weather/city/"+this.ville).then((response) => {
          this.dataWeather = response.data
        })
    },
    clear : function(){
      this.dataWeather=null
      this.ville=null
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
