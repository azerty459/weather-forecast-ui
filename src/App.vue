<template>
  <div id="app" class="grey lighten-4">
    <navbar/>
    <div class="container">
      <search/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/materialize/js/materialize.min.js'

import navbar from './components/Header.vue'
import search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    navbar,
    search
  }
}
</script>

<style>
@import './assets/materialize/css/materialize.min.css';

.center {
  text-align: center;
}
.margin-top {
  margin-top: 1em;
}
</style>
