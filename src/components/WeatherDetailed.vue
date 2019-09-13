<template>
  <div v-if="loaded">
    <div v-if="error">Error</div>

    <div v-else>
      <h2>{{cityName}}</h2>

      <table>
        <thead>
          <tr>
            <th>Hour</th>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Description</th>
            <th>Precipitations</th>
          </tr>
        </thead>

        <tbody>
          <tr v-for="forecast in forecasts" :key="forecast.instant">
            <td>{{forecast.instant | moment('H:mm')}}</td>
            <td>{{forecast.weatherName}}</td>
            <td>{{getTemperature(forecast)}}</td>
            <td>{{forecast.weatherDescription}}</td>
            <td>{{getPrecipitations(forecast)}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueMoment from "vue-moment";
import VueX from "vuex";

Vue.use(VueMoment);

export default {
  computed: {
    ...VueX.mapGetters({
      weather: "weatherDetails",
      loaded: "weatherDetailsLoaded",
      error: "weatherDetailsError"
    }),

    cityName() {
      return ((this.weather || {}).city || {}).name;
    },

    forecasts() {
      const forecastsDetailsList =
        (this.weather || {}).forecastsDetailsList || [];
      return forecastsDetailsList.length > 0
        ? forecastsDetailsList[0].forecasts
        : null;
    }
  },

  methods: {
    getTemperature(forecast) {
      return Math.round((forecast || {}).temperature || 0) + "°C";
    },

    getPrecipitations(forecast) {
      return ((forecast || {}).rain || 0) + "%";
    }
  }
};
</script>
