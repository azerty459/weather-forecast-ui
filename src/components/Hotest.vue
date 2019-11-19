<template>
  <div v-if="hotest">
    <div v-if="!error">
      <ActualWeatherOverview
        :city="city"
        :weather="hotest.temps"
        :temperature="hotest.temperature"
        :minimum="hotest.temperatureMinimum"
        :maximum="hotest.temperatureMaximum"
        :day="new Date(hotest.dateEtHeure).getDay()"
      />
    </div>
    <div v-if="error">
      <h1>Impossible de charger la meteo à {{ city }}</h1>
    </div>
    <router-link to="/">Sélectionner une autre ville</router-link>
  </div>
</template>

<script>
export default {
  components: {
    ActualWeatherOverview: () => import("@/components/ActualWeatherOverview")
  },
  data() {
    return {
      hotest: null,
      error: false
    };
  },
  props: ["city"],
  http: {
    root: "http://localhost:8090"
  },
  mounted() {
    this.$resource(`forecast/${this.city}/hotest`)
      .get()
      .then(
        response => (this.hotest = response.data),
        response => (this.error = true)
      );
  }
};
</script>

<style>
</style>
