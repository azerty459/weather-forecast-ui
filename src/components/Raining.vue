<template>
  <div v-if="raining">
    <div v-if="!error">
      <h1>Jour de pluie à venir pour {{ city }}</h1>
      <div v-for="day in raining" v-bind:key="day">
        <p>Le {{ day }}</p>
      </div>
    </div>
    <div v-if="error">
      <h1>Impossible de charger les jours de pluie à {{ city }}</h1>
    </div>
    <router-link to="/">Sélectionner une autre ville</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      raining: null,
      error: false
    };
  },
  props: ["city"],
  http: {
    root: "http://localhost:8090"
  },
  mounted() {
    this.$resource(`forecast/${this.city}/raining`)
      .get()
      .then(
        response => (this.raining = response.data),
        response => (this.error = true)
      );
  }
};
</script>

<style></style>
