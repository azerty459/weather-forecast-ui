<template>
  <div id="app">
    <Header></Header>
    <Search></Search>
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
</style>
