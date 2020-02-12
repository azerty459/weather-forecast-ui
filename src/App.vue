<template>
  <div id="app">
    <search-component v-on:cityChosen="onCityChosen" />
    <router-view />
  </div>
</template>

<script>
import SearchComponent from "./components/SearchComponent.vue";
import { HTTP } from "../src/http-constants";

export default {
  name: "App",
  components: {
    SearchComponent
  },
  data() {
    return {
      chosenCity: null,
      previsions: null,
      errors: null
    };
  },
  methods: {
    onCityChosen(value) {
      console.log("App method onCityChosen called");
      this.chosenCity = value;
      //TODO remplacer par code qui checke juste que la ville existe
      // HTTP.get("/" + value + "/")
      //   .then(response => {
      //     this.previsions = response.data;
      //   })
      //   .catch(e => {
      //     this.errors = e;
      //   });
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
