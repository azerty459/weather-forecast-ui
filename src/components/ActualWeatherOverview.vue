<template>
  <div>
    <h1>{{ city }}</h1>
    <h2>{{ weather }}</h2>
    <h3>{{ temperature }}°</h3>
    <p>{{ jour }}: {{ minimum }}° - {{ maximum }}°</p>
  </div>
</template>

<script>
export default {
  props: ["city", "weather", "temperature", "minimum", "maximum", "day"],
  data() {
    return {
      jours: [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
      ]
    };
  },
  computed: {
    jour() {
      return this.jours[this.day];
    }
  }
};
</script>

<style>
</style>
