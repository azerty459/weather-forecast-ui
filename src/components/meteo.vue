<template>
    <div id="meteo_jour">
        <h1>Météo:</h1>
        <label>Entrez le nom d'une ville: <input type="text" v-model="ville.nom"/></label>
        <button v-on:click="appelREST" >Changer ville</button>
        <meteoHeure></meteoHeure>
        <table v-if="meteo != null">
            <tr>
              <td scope="row"><strong>Nom</strong></td>
              <td>{{meteo.name}}</td>
            </tr>
            <tr>
              <td scope="row"><strong>Longitude</strong></td>
              <td>{{meteo.longitude}}</td>
            </tr>
            <tr>
              <td scope="row"><strong>Altitude</strong></td>
              <td>{{meteo.latitude}}</td>
            </tr>
            <tr>
              <td scope="row"><strong>Elevation</strong></td>
              <td>{{meteo.elevation}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import meteoJour from '@/components/meteoJour.vue'

Vue.use(VueAxios, axios)

export default{
  components: {meteoJour},
  data () {
    return {
      ville: {
        nom: 'roubaix'
      },
      meteo: null
    }
  },
  methods: {
    appelREST: function () {
      Vue.axios
        .get('http://localhost:8001/meteo/' + this.ville.nom + '/')
        .then(response => { this.meteo = response.data.city_info })
    }
  }
}
</script>
<style>
  @import '../css/meteo.css';
</style>
