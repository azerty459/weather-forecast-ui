<template>
  <div>
    <p>La meteo à {{ city }}</p>
    <label>
      Ville :
      <input type="text" v-model="city" />
    </label>
    <button @click="forecast">Prévisions</button>
    <button @click="raining">Jours de pluie</button>
    <button @click="hotest">Le plus chaud d'ici 5 jours</button>
    <button @click="humidity">Rapport d'humidité</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      city: "Hem"
    };
  },
  methods: {
    forecast() {
      this.$router.push({ path: `/forecast/${this.city}` });
    },
    raining() {
      this.$router.push({ path: `/forecast/${this.city}/raining` });
    },
    hotest() {
      this.$router.push({ path: `/forecast/${this.city}/hotest` });
    },
    humidity() {
      this.$router.push({ path: `/forecast/${this.city}/humidity` });
    }
  }
};
</script>

<style>
</style>
