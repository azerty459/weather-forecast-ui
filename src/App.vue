<template>
<div id="app">
  <Header></Header>
  <Search></Search>
  <div class="container">
    <router-view/>
  </div>
</div>
</template>

<script>
import Header from './components/Header.vue'
import Search from './components/Search.vue'

export default {
  name: 'app',
  components: {
    Header, Search
  }
}
</script>

<style>
@import '../index.css';
</style>
