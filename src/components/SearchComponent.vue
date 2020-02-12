<template>
  <div id="compContainer">
    <form>
      <label>Ville :</label>
      <input
        v-model="ville"
        type="text"
        v-on:blur="$emit('cityChosen', ville)"
      />
      <button type="submit" @click.stop.prevent="getMeteo()">Prévisions</button>
      <button type="submit" @click.stop.prevent="getHottestDay()">
        Jour le plus chaud
      </button>
      <button type="submit" @click.stop.prevent="getRainyDays()">
        Jours pluvieux
      </button>
      <button type="submit" @click.stop.prevent="getHumidityStats()">
        Info humidité
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: "SearchComponent",
  data() {
    return {
      ville: null,
      meteoData: null
    };
  },
  methods: {
    getMeteo() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/meteo/" + this.ville);
    },
    getHottestDay() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/hottestday/" + this.ville);
    },
    getRainyDays() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/rainydays/" + this.ville);
    },
    getHumidityStats() {
      //if you want to send any data into server before redirection then you can do it here
      this.$router.push("/humiditystats/" + this.ville);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compContainer {
}
</style>
