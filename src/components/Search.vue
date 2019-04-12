<template>
    <div class="row margin-top">
        <div class="col s10 l8 offset-s1">
            <div class="row">
                <div class="input-field col s12">
                    <i class="material-icons prefix">location_city</i>
                    <input v-model="search" v-on:keyup.enter="launchSearch" id="search_city" type="text">
                    <label for="search_city">Ville</label>
                </div>
            </div>
        </div>
        <div class="col s12 l2 center margin-top">
            <button @click="launchSearch" class="waves-effect waves-light btn blue accent-4"><i class="material-icons left">search</i>Valider</button>
        </div>
    </div>
</template>

<script>
export default{
  data () {
    return {
      search: ''
    }
  },
  methods: {
    launchSearch () {
      var page = this.$route.name
      if (page === 'index') {
        page = 'prevision'
      }
      this.$router.push({name: page, params: {ville: this.search}})
      window.bus.$emit('newSearch', this.search)
    }
  }
}
</script>

<style>

</style>
