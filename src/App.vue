<template>
  <div id="app">
    <search-bar @searchedCity="onClickChild"></search-bar>
    <b-container fluid class="mt-3">
      <home-page v-show="!cityName" :cityName="cityName"></home-page>
      <nav-bar v-if="cityName" :cityName="cityName"></nav-bar>
    </b-container>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import SearchBar from './components/SearchBar'
import HomePageVue from './components/HomePage'
import NavBarVue from './components/NavBar'

export default {
  name: 'App',
  components: {
    'search-bar': SearchBar,
    'home-page': HomePageVue,
    'nav-bar': NavBarVue
  },
  data () {
    return { cityName: '' }
  },
  methods: {
    onClickChild (value) {
      this.cityName = value
      console.log('child', value) // someValue
    }
  }
}
</script>
