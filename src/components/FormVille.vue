<template>
  <div>
    <b-alert show variant="danger" v-if="errorVille">
      <i class="fas fa-exclamation-triangle mr-2"></i>
      Vous devez renseigner une ville !!!
    </b-alert>
    <div class="row col-sm-12 mb-5">
      <b-input type="text" v-model="ville" class="rounded offset-sm-2 col-sm-6" @keyup.enter="getPrevisions" placeholder="Entrez une ville..." autofocus></b-input>
      <b-btn variant="success" class="offset-sm-1" @click="getPrevisions">Rechercher</b-btn>
    </div>
  </div>



</template>

<script>

  export default {
    name: 'FormVille',
    data() {
      return {
        ville: '',
        errorVille: false
      }
    },
    methods: {
      getPrevisions() {
        this.errorVille = false
        if(this.ville){
          this.$emit('getVille', this.ville)
        } else {
          this.errorVille = true
          this.$emit('getVille', '')
        }

      }
    }
  }
</script>

<style>

</style>
