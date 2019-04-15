<template>
  <div id="app">
    <navbar/>
    <div class="container">
      <search/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/materialize/js/materialize.min.js'
import './assets/chart/Chart.bundle.min.js'

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

body {
  background-color: #f5f5f5;
}
.center {
  text-align: center;
}
.pointer {
  cursor: pointer;
}
.hide {
  display: none;
}
.margin-top {
  margin-top: 1em;
}
</style>
