<template>
  <div class="col-lg-12 text-center">
    <input class="text-center" type="text" v-model="nomVilleRecherche" v-on:keypress.enter="emitDemandePrevisions">
    <button class="btn btn-success "  @click="emitDemandePrevisions">Obtenir</button>
  </div>

</template>

<script>
  export default {
    name: "FieldVilleRecherche",
    data: function () {
      return {
        nomVilleRecherche: ''
      }
    },
    methods: {

      emitDemandePrevisions() {
        this.$emit('submit', this.nomVilleRecherche)
      }

    }
  }
</script>

<style scoped>

</style>
