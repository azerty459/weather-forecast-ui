<template>
  <div class="container">
    <h1>Jour le plus chaud de la semaine</h1>
    <form-ville @getVille="getPrevisions"></form-ville>

    <spinner v-if="spinner"></spinner>
    <error-ville error="Ville Inconnue" v-if="errorVille"></error-ville>

    <b-card-group class="mb-5 offset-sm-3 col-sm-6">
      <prevision :prevision="prevision" v-if="prevision"></prevision>
    </b-card-group>
  </div>
</template>

<script>
  import axios from 'axios'
  import Prevision from '@/components/Prevision'
  import FormVille from '@/components/FormVille'
  import Spinner from '@/components/Spinner'
  import ErrorVille from '@/components/ErrorVille'

  export default {
    name: 'JourChaud',
    components: {
      Prevision, FormVille, Spinner, ErrorVille
    },
    data() {
      return {
        prevision: null,
        spinner: false,
        errorVille: false

      }
    },
    methods: {
      getPrevisions(ville) {
        this.prevision = null
        if(ville != ''){
          this.spinner = true
          this.errorVille = false
          axios
          .get('http://localhost:8080/meteo/ville/' + ville + '/jour-plus-chaud')
          .then(response => {this.prevision = response.data, this.spinner = false})
          .catch(error => {console.log(error), this.spinner = false, this.errorVille = true})
        }

      }
    }
  }
</script>

<style>

</style>
