<template>
  <div>
    <weather-search-input
      :search="search"
      v-on:update-search="updateSearch($event)"
      v-on:launch-search="launchSearch"
    ></weather-search-input>

    <weather-search-button v-on:launch-search="launchSearch"></weather-search-button>
  </div>
</template>

<script>
import WeatherSearchInput from "./WeatherSearchInput";
import WeatherSearchButton from "./WeatherSearchButton";

import Vue from "vue";
import VueX from "vuex";
import router from "vue-router";

Vue.use(VueX);

export default {
  components: {
    WeatherSearchInput,
    WeatherSearchButton
  },

  computed: {
    ...VueX.mapGetters({ search: "search" })
  },

  methods: {
    ...VueX.mapActions({
      updateSearchInputStore: "updateSearchInput",
      launchSearchStore: "launchSearch"
    }),

    launchSearch() {
      if (this.$router.currentRoute.name == "weather") {
        this.$router.push({ name: "weatherCurrent" });
      }
      this.launchSearchStore();
    },

    updateSearch(event) {
      this.updateSearchInputStore(event.target.value);
    }
  }
};
</script>