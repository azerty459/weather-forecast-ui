<template>
    <div id="meteo_jour">
        <h1>Météo:</h1>
        <label>Entrez le nom d'une ville: <input type="text" v-model="ville.nom"/></label>
        <button v-on:click="init" >Changer ville</button>
        <div id="info_ville" v-if="meteo && cityInfo">
          <h2>Informations de la ville</h2>
          <table>
              <tr>
                <td scope="row"><strong>Nom</strong></td>
                <td>{{cityInfo.name}}</td>
              </tr>
              <tr>
                <td scope="row"><strong>Longitude</strong></td>
                <td>{{cityInfo.longitude}}</td>
              </tr>
              <tr>
                <td scope="row"><strong>Altitude</strong></td>
                <td>{{cityInfo.latitude}}</td>
                </tr>
              <tr>
                <td scope="row"><strong>Elevation</strong></td>
                <td>{{cityInfo.elevation}}</td>
              </tr>
          </table>
        </div>
        <meteoSemaine v-if="previsionsHeure != null" v-bind:previsions=previsionsHeure></meteoSemaine>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import meteoSemaine from '@/components/meteoSemaine.vue'

Vue.use(VueAxios, axios)

export default{
  components: {meteoSemaine},
  data () {
    return {
      ville: {
        nom: null
      },
      meteo: null,
      cityInfo: null,
      previsionsHeure: null,
      previsionsJour: null,
      previsionSemaine: null
    }
  },
  methods: {
    appelREST: function () {
      Vue.axios
        .get('http://localhost:8000/meteo/' + this.ville.nom + '/')
        .then(response => { this.meteo = response.data })
    },
    init: function () {
      this.appelREST()
      if (this.meteo != null) {
        this.cityInfo = this.meteo.city_info
        this.previsionsHeure = this.meteo.previsions
      }
    }
  }
}
</script>
<style>
  @import '../css/meteo.css';
</style>
