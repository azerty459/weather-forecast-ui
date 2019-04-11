<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/materialize/js/materialize.min.js'

import navbar from './components/Header.vue'

export default {
  name: 'App',
  components: {
    navbar
  }
}
</script>

<style>
@import './assets/materialize/css/materialize.min.css';

.center {
  text-align: center;
}
</style>
