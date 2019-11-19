<template>
  <div v-if="humidity">
    <div v-if="!error">
      <h1>Humidité à {{ city }}</h1>
      <h2>Actuellement {{ humidity.humiditeActuelle }}%</h2>
      <div>
        <h2>Moyenne journalière</h2>
        <div
          v-for="(humiditeMoyen, jour) in humidity.humiditeMoyen"
          v-bind:key="(humiditeMoyen, jour)"
        >
          <p>Le {{ jour }}: {{ humiditeMoyen }}%</p>
        </div>
      </div>
      <div>
        <h2>Jour plus sec</h2>
        <div v-if="humidity.lePlusSec">
          <div
            v-for="prevision in humidity.lePlusSec"
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
  data() {
    return {
      humidity: null,
      error: false
    };
  },
  props: ["city"],
  http: {
    root: "http://localhost:8090"
  },
  mounted() {
    this.$resource(`forecast/${this.city}/humidity`)
      .get()
      .then(
        response => (this.humidity = response.data),
        response => (this.error = true)
      );
  }
};
</script>

<style>
</style>
