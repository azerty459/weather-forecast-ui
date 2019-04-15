<template>
  <div>
  <div class="search" >
    <label>Entrez une ville:</label>
    <input type="text" @keyup.enter="valider" v-model="searchVille" placeholder="Ville">
    <button type="submit" @click="valider">Valider</button>
  </div>
  <div class="title result" v-if="!success">
     <h1>{{message}}</h1><br>
  </div>
  <div class="result" v-if="success">
    <div class="title">
      <h1>{{message}}{{resultVille | capitalize}}</h1><br>
    </div>
    <div class="row pad">
      <card v-for="info in infos.listOfDays" :key="info.date" :icon="info.icon_big" :dayLong="info.day_long" :condition="info.condition" :tempMin="info.tmin" :tempMax="info.tmax"></card>
    </div>
  </div>
  </div>
</template>

<script>
import card from './Card.vue'

export default {
  data () {
    return {
      success: false,
      searchVille: '',
      message: '',
      infos: []
    }
  },
  components: {
    card
  },
  methods: {
    valider: function () {
      this.resultVille = this.searchVille
      this.$http.get(`http://127.0.0.1:8080/meteo/${this.resultVille}`).then((response) => {
        console.log('erreurTest', response)
        this.infos = response.json().then((data) => {
          this.infos = data
          if (this.infos.currentCondition !== null) {
            this.success = true
            this.message = 'Prévision à 5 jours pour la ville de '
          } else {
            this.success = false
            this.message = `Aucun resultat pour la ville de "${this.resultVille}"`
          }
        }, (response) => {
          console.log('aaaaaaeeeeeerreur', response)
          this.success = false
        })
      }, (response) => {
        console.log('eeeeeerreur', response)
        this.success = false
      })
    }
  },
  filters: {
    capitalize: function (value) {
      if (!value) return ''
      value = value.toString()
      return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
    }
  }
}
</script>

<style>
  .search{
    position: relative;
    margin-right: auto;
    margin-left: auto;
    margin-top: 6%;
    text-align: center;
  }
  .result{
    position: relative;
    margin-right: 6%;
    margin-left: 6%;
    margin-top:4%;
  }
  .title{
    font-family: Georgia, 'Times New Roman', Times, serif;
    text-align: center;
    margin-bottom: 2%;
  }
  .pad{
   margin: 4%;
  }
  </style>
