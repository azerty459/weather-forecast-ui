<template>
  <div v-if="loaded">
    <div v-if="error">Error</div>

    <div v-else>
      <h2>{{cityName}}</h2>

      <table>
        <thead>
          <tr>
            <th>Weather</th>
            <th>Temperature</th>
            <th>Description</th>
            <th>Precipitations</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>{{weather.weatherName}}</td>
            <td>{{temperature}}</td>
            <td>{{weather.weatherDescription}}</td>
            <td>{{precipitations}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import VueX from "vuex";

export default {
  computed: {
    ...VueX.mapGetters({
      weather: "weatherCurrent",
      loaded: "weatherCurrentLoaded",
      error: "weatherCurrentError"
    }),

    cityName() {
      return ((this.weather || {}).city || {}).name;
    },

    temperature() {
      return Math.round((this.weather || {}).temperature || 0) + "°C";
    },

    precipitations() {
      return ((this.weather || {}).rain || 0) + "%";
    }
  }
};
</script>
