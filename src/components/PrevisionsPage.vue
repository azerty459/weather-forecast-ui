<template>
  <div>
    <NavBar></NavBar>
    <HeaderPrevisionMeteo></HeaderPrevisionMeteo>
    <FieldVilleRecherche @submit="getAllPrevision"></FieldVilleRecherche>
    <PrevisionListe v-if="isVisible"></PrevisionListe>
  </div>


</template>

<script>
  import HeaderPrevisionMeteo from "./HeaderPrevisionMeteo";
  import FieldVilleRecherche from "./FieldVilleRecherche";
  import NavBar from "./NavBar";
  import PrevisionListe from "./prevision/PrevisionListe";
  import PrevisionsStore from "./PrevisionsStore";

  export default {
    store: PrevisionsStore,
    name: "Previsions-liste",
    components: {HeaderPrevisionMeteo, FieldVilleRecherche, NavBar, PrevisionListe},
    data: function () {
      return {
        isVisible: false
      }
    },

    methods: {
      getAllPrevision(value) {
        this.isVisible =false
        this.$http.get('http://localhost:9090/previsions/' + value).then(response => {
          PrevisionsStore.commit('ADD_PREVISIONS_LIST', response.data.previsionList)
          this.isVisible = true
        }, response => {
          console.log('erreur', response)

        })
      },
    }


  }

</script>

<style scoped>

</style>
