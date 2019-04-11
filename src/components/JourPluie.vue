<template>
  <div class="container">
    <h1>Jour(s) de pluie</h1>
    <form-ville @getVille="getPrevisions"></form-ville>
    <spinner v-if="spinner"></spinner>
    <error-ville error="Ville Inconnue" v-if="errorVille"></error-ville>
    <b-card-group deck class="mb-5">
      <prevision v-for="(prev, index) in previsions" :key="index" :prevision="prev"></prevision>
    </b-card-group>
    <h1 class="text-success" v-if="previsions && previsions.length == 0">
      Pas de pluie prévue cette semaine !!!
    </h1>
    
  </div>
</template>

<script>
  import axios from 'axios'
  import Prevision from '@/components/Prevision'
  import FormVille from '@/components/FormVille'
  import Spinner from '@/components/Spinner'
  import ErrorVille from '@/components/ErrorVille'

  export default {
    name: 'JourPluie',
    components: {
      Prevision, FormVille, ErrorVille, Spinner
    },
    data() {
      return {
        previsions: null,
        okData: false,
        spinner: false,
        errorVille: false
      }
    },
    methods: {
      getPrevisions(ville) {
      this.previsions = null
      if(ville != ''){
        this.spinner = true
        this.errorVille = false
        axios
        .get('http://localhost:8080/meteo/ville/' + ville + '/jour-pluie')
        .then(response => {this.previsions = response.data, this.spinner = false})
        .catch(error => {console.log(error), this.spinner = false, this.errorVille = true})
      }
      
    }
  }
}
</script>

<style>

</style>
