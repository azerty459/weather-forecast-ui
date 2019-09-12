<template>
  <div v-if="day">
    <h2>{{day.cityName}}</h2>
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
          <td>{{day.weatherName}}</td>
          <td>{{temperature}}</td>
          <td>{{day.weatherDescription}}</td>
          <td>{{precipitations}}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";

Vue.use(VueResource);

export default {
  data() {
    return {
      day: {}
    };
  },
  http: {
    root: "http://localhost:8090"
  },
  mounted() {
    this.$resource("weather{/cityName}")
      .get({ cityName: "lille" })
      .then(
        response => {
          this.day = response.data;
        },
        error => {
          console.log(error);
        }
      );

    // strict: process.env.NODE_ENV !== 'production'
  },
  computed: {
    temperature() {
      return Math.round((this.day || {}).temperature || 0) + "°C";
    },
    precipitations() {
      return ((this.day || {}).rain || 0) + "%";
    }
  }
};
</script>
