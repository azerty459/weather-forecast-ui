<template>
  <div v-if="loaded">
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
          <td>{{forecast.instant | moment('h:mm')}}</td>
          <td>{{getWeatherName(forecast)}}</td>
          <td>{{getTemperature(forecast)}}</td>
          <td>{{getWeatherDescription(forecast)}}</td>
          <td>{{getPrecipitations(forecast)}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import VueMoment from "vue-moment";

Vue.use(VueResource);
Vue.use(VueMoment);

export default {
  data() {
    return {
      day: {},
      forecasts: [],
      loaded: false
    };
  },

  http: {
    root: "http://localhost:8090"
  },

  mounted() {
    this.$resource("weather/details{/cityName}")
      .get({ cityName: "lille" })
      .then(
        response => {
          this.day = response.data;
          this.generateForecasts();
        },
        error => {
          console.log(error);
        }
      )
      .then(() => {
        this.loaded = true;
      });

    // strict: process.env.NODE_ENV !== 'production'
  },

  computed: {
    cityName() {
      return ((this.day || {}).city || {}).name;
    }
  },
  methods: {
    generateForecasts() {
      const forecastsDetailsList = (this.day || {}).forecastsDetailsList || [];
      this.forecasts =
        forecastsDetailsList.length > 0
          ? forecastsDetailsList[0].forecasts
          : null;
    },

    getWeatherName(forecast) {
      return (forecast || {}).weatherName || 0;
    },

    getWeatherDescription(forecast) {
      return (forecast || {}).weatherDescription || 0;
    },

    getTemperature(forecast) {
      return Math.round((forecast || {}).temperature || 0) + "°C";
    },

    getPrecipitations(forecast) {
      return ((forecast || {}).rain || 0) + "%";
    }
  }
};
</script>
