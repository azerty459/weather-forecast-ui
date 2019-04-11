<template>
  <div class="container">
    <h1>Statistiques humidité</h1>
    <form-ville @getVille="getPrevisions" class="mb-5"></form-ville>
    <spinner v-if="spinner"></spinner>
    <error-ville error="Ville Inconnue" v-if="errorVille"></error-ville>
    <b-card-group deck class="text-center" v-if="humidite">
      <b-card
      border-variant="info"
      header="Humidité actuelle"
      header-bg-variant="info"
      header-text-variant="white"
      align="center"
      >
      <div class="h1 center bold" v-if="humidite">{{ humidite.humiditeCourante }} %</div>
    </b-card>

    <b-card
    border-variant="info"
    header="Humidité moyenne de la semaine"
    header-bg-variant="info"
    header-text-variant="white"
    align="center"
    >
    <div class="h1 center bold" v-if="humidite">
      {{ humidite.humiditeMoyenneSemaine.toFixed(2) }} %
    </div>
  </b-card>
</b-card-group>

<p class="h2 text-center mt-3" v-if="humidite">{{ humidite.indicateurHumidite }}</p>

</div>
</template>

<script>
  import axios from 'axios'
  import FormVille from '@/components/FormVille'
  import Spinner from '@/components/Spinner'
  import ErrorVille from '@/components/ErrorVille'

  export default {
    name: 'Humidite',
    components: {
      FormVille, Spinner, ErrorVille
    },
    data() {
      return {
        humidite: null,
        spinner: false,
        errorVille: false
      }
    },
    methods: {
      getPrevisions(ville) {
        this.humidite = null
        if(ville != ''){
          this.spinner = true
          this.errorVille = false
          axios
          .get('http://localhost:8080/meteo/ville/' + ville + '/humidite')
          .then(response => {this.humidite = response.data, this.spinner = false})
          .catch(error => {console.log(error), this.spinner = false, this.errorVille = true})
        }
      }
    }
  }
</script>

<style>

</style>
