<template>
  <div id="app">
    <navigation-bar/>
    <div class="container">
      <search-form/>
      <router-view/>
    </div>
  </div>
</template>

<script>
import './assets/chart/Chart.bundle.min.js'

import NavigationBar from './components/Header.vue'
import SearchForm from './components/Search.vue'

export default {
  name: 'App',
  components: {
    NavigationBar,
    SearchForm
  }
}
</script>

<style>
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
