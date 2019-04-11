<template>
  <div class="container mb-3">
    <h1>PRÉVISIONS MÉTÉO</h1>
    <!-- <div class="row col-sm-12">
      <b-input type="text" v-model="ville" class="rounded offset-sm-2 col-sm-6" @keyup.enter="getPrevisions"></b-input>
      <b-btn variant="success" class="offset-sm-1" @click="getPrevisions">Rechercher</b-btn>
    </div> -->
    <form-ville @getVille="getPrevisions"></form-ville>

    <spinner v-if="spinner"></spinner>


    <error-ville error="Ville Inconnue" v-if="errorVille"></error-ville>
    
    <div v-if="previsions">
      <div class="row col-sm-12">
        <ville-info :villeInfo="previsions.villeInfo"></ville-info>
        <conditions-courantes :conditions="previsions.conditionCourante"></conditions-courantes>
      </div>
      
      <h1 class="mb-5 mt-5">Prévisions à 5 jours</h1>
      <b-card-group deck>
        <prevision :prevision="previsions.prevision_j0"></prevision>
        <prevision :prevision="previsions.prevision_j1"></prevision>
        <prevision :prevision="previsions.prevision_j2"></prevision>
        <prevision :prevision="previsions.prevision_j3"></prevision>
        <prevision :prevision="previsions.prevision_j4"></prevision>
      </b-card-group>
    </div>
    
  </div>
</template>

<script>
  import axios from 'axios'
  import VilleInfo from '@/components/VilleInfo'
  import ConditionsCourantes from '@/components/ConditionsCourantes'
  import Prevision from '@/components/Prevision'
  import FormVille from '@/components/FormVille'
  import Spinner from '@/components/Spinner'
  import ErrorVille from '@/components/ErrorVille'

  export default {
    name: 'Previsions',
    components: {
      VilleInfo, ConditionsCourantes, Prevision, FormVille, Spinner, ErrorVille
    },
    data() {
      return {
        previsions: null,
        spinner: false,
        errorVille: false

      }
    },
    methods: {
      getPrevisions(ville) {
        this.previsions = null
        this.errorVille = false
        if(ville != ''){
          this.errorVille = false
          this.spinner = true
          axios
          .get('http://localhost:8080/meteo/ville/' + ville)
          .then(response => {this.previsions = response.data, this.spinner = false})
          .catch(error => {console.log(error), this.spinner = false, this.errorVille = true})
        } 
      }
    }
  }
</script>

<style>

</style>
