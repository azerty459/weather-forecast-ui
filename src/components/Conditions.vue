<template>
  <div>
    <NavBar></NavBar>
    <HeaderPrevisionMeteo></HeaderPrevisionMeteo>

    <div class="text-center">
      <input class="text-center" type="text" v-model="nomVilleRecherche">
      <div class="btn-group" role="group" aria-label="demandes particulières">
        <button type="button" class="btn btn-secondary" @click="getJourPlusChaud">Journée plus chaude</button>
        <button type="button" class="btn btn-secondary" @click="getJourAvecPluie">Journée avec pluie</button>
        <button type="button" class="btn btn-secondary" @click="getHumiditeMin">Humidité Min</button>
      </div>
    </div>

    <PrevisionListe v-if="demandeListePrevision"></PrevisionListe>
    <PrevisionUnique v-if="demandeUniquePrevision"></PrevisionUnique>

  </div>
</template>

<script>
  import HeaderPrevisionMeteo from "./HeaderPrevisionMeteo";
  import FieldVilleRecherche from "./FieldVilleRecherche";
  import NavBar from "./NavBar";
  import PrevisionListe from "./prevision/PrevisionListe";
  import PrevisionUnique from "./prevision/PrevisionUnique";
  import PrevisionStore from './PrevisionsStore'

  export default {
    store: PrevisionStore,
    name: "Conditions",
    components: {PrevisionListe, PrevisionUnique, HeaderPrevisionMeteo, FieldVilleRecherche, NavBar},
    data: function () {
      return {
        demandeListePrevision: false,
        demandeUniquePrevision: false,
        nomVilleRecherche: "",
        previsionList: [],
        PrevisionUnique: Object,

      }
    },

    methods: {
      getJourPlusChaud() {
        this.demandeUniquePrevision = false,
          this.$http.get('http://localhost:9090/previsions/' + this.nomVilleRecherche + '/jourpluschaud').then(response => {
              console.log(response.data)

              PrevisionStore.commit('ADD_PREVISION_UNIQUE', response.data)
              this.demandeUniquePrevision = true


            }, response => {
              console.log(response)
            }
          )

      },
      getHumiditeMin() {
        this.demandeUniquePrevision = false,
          this.demandeListePrevision = false,
          this.$http.get('http://localhost:9090/previsions/' + this.nomVilleRecherche + '/humidite/min').then(response => {
              console.log(response.data)

              PrevisionStore.commit('ADD_PREVISION_UNIQUE', response.data)
              this.demandeUniquePrevision = true


            }, response => {
              console.log(response)
            }
          )

      },
      getJourAvecPluie() {
        this.demandeUniquePrevision = false,
          this.demandeListePrevision = false,

          this.$http.get('http://localhost:9090/previsions/' + this.nomVilleRecherche + '/avecpluie').then(response => {
              console.log(response.data)

              PrevisionStore.commit('ADD_PREVISIONS_LIST', response.data)
              this.demandeListePrevision = true

            }, response => {
              console.log(response)
            }
          )

      },

    }
  }


</script>

<style scoped>

</style>
