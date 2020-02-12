<template>
  <div id="compContainer" :class="styleOption">
    <div class="subCont">{{ getNameOfDay }}</div>
    <div class="subCont">
      <p>description : {{ prevision.description }}</p>
      <p>temperature : {{ prevision.temperature }}</p>
      <p>humidité : {{ prevision.humidity }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "PrevisionItem",
  props: {
    prevision: Object,
    index: Number,
    styleOption: String
  },
  computed: {
    getNameOfDay: function() {
      console.log("computed getNameOfDay() called");
      if (this.index === 0) {
        return "Maintenant";
      }
      let ojduiAsNumber = new Date().getDay();
      let datePrevAsNumber = new Date(this.prevision.date).getDay();
      if (datePrevAsNumber == ojduiAsNumber) {
        return "Aujourd'hui";
      }
      if (datePrevAsNumber == (ojduiAsNumber + 1) % 7) {
        return "Demain";
      }
      return [
        "Dimanche",
        "Lundi",
        "Mardi",
        "Mercredi",
        "Jeudi",
        "Vendredi",
        "Samedi"
      ][datePrevAsNumber];
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#compContainer {
  margin: 2px;
  border: 1px solid transparent;
  display: flex;
  height: 100px;
  width: fit-content;
  margin-left: auto;
  margin-right: auto;
}
#compContainer.rainy {
  border: 1px solid lightblue;
}
#compContainer.hot {
  border: 1px solid red;
}
.subCont {
  width: 300px;
}
p {
  margin: 0;
}
</style>
