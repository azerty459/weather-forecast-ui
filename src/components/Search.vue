<template>
<div class="search">
  <div class="row" >
    <div class="center col-sm-8 offset-sm-2">
      <input type="text" @keyup.enter="valider" v-model="searchVille" :placeholder="nom">
      <button class="btn btn-secondary btn-md" type="submit" @click="valider">Rechercher</button>
    </div>
  </div>
  <div class="logoAccueil row" v-if="!success">
    <div class="bien center col-sm-8 offset-sm-2">
      <h3>Bienvenue sur votre application météo</h3>
    </div>
    <div class="center col-sm-8 offset-sm-2">
      <img  src="./../assets/logo_accueil.png"/>
    </div>
  </div>
  <div class="choix" v-if="success">
    <div class="row">
      <choice :ville="this.searchVille"></choice>
    </div>
  </div>
</div>
</template>

<script>
import choice from './Option.vue'

export default {
  data () {
    return {
      success: false,
      nom: 'Ville',
      searchVille: '',
      infos: []
    }
  },
  created () {
    var split = location.pathname.split('/')
    if (split.length > 2 && split[1] === 'meteo' && split[2].trim !== '') {
      this.nom = split[2]
      this.searchVille = this.nom
      this.success = true
    }
  },
  components: {
    choice
  },
  methods: {
    valider: function () {
      if (this.searchVille.length > 0) {
        this.success = true
        this.$router.push('/')
      }
    }
  }
}
</script>

<style>
.bien{
  margin-bottom: 1%;
}
h1{
  font-family:  Georgia, 'Times New Roman', Times, serif;
}
.center{
  text-align: center;
}
.search{
  margin-top: 4%;
}
.logoAccueil{
  margin-top: 6%;
}
.choix{
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
