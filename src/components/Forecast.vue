<template>
  <div v-if="weather">
    <div v-if="!error">
      <div v-if="weather.actuellement">
        <ActualWeatherOverview
          :city="city"
          :weather="weather.actuellement.temps"
          :temperature="weather.actuellement.temperature"
          :minimum="weather.actuellement.temperatureMinimum"
          :maximum="weather.actuellement.temperatureMaximum"
          :day="new Date().getDay()"
        />
        <div v-if="weather.previsions">
          <div
            v-for="prevision in weather.previsions"
            v-bind:key="prevision"
          >{{ prevision.dateEtHeure }} : {{ prevision.temperature }}°</div>
        </div>
      </div>
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
      weather: null,
      error: false
    };
  },
  props: ["city"],
  http: {
    root: "http://localhost:8090"
  },
  mounted() {
    this.$resource(`forecast/${this.city}`)
      .get()
      .then(
        response => (this.weather = response.data),
        response => (this.error = true)
      );
  }
};
</script>

<style>
</style>
