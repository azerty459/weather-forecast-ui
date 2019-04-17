<template>
  <div class="search">
  <div class="row" >
    <div class="center col-sm-8 offset-sm-2">
      <label>Entrez une ville:</label>
      <input type="text" @keyup.enter="valider" v-model="searchVille" placeholder="Ville">
      <button type="submit" @click="valider">Valider</button>
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
      searchVille: '',
      infos: []
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
.center{
  text-align: center;
}
.search{
  margin-top: 4%;
}
.choix{
  margin-top: 2%;
  margin-bottom: 2%;
}
</style>
