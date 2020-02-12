<template>
  <div id="compContainer">
    <h4>- Infos humidité -</h4>
    <p>Actuellement : {{ currentHumidity }}</p>
    <p>Moyenne des prochains jours : {{ meanHumidityForComingDays }}</p>
    <p>Jour le plus sec :</p>
    <prevision-item
      v-if="driestDayPrevision != null"
      :prevision="driestDayPrevision"
      :index="null"
      :styleOption="null"
    />
  </div>
</template>

<script>
import PrevisionItem from "./PrevisionItem.vue";
import { HTTP } from "../http-constants";

export default {
  name: "HumidityDetails",
  props: {
    ville: String
  },
  components: {
    PrevisionItem
  },
  data() {
    return {
      currentHumidity: null,
      meanHumidityForComingDays: null,
      driestDayPrevision: null
    };
  },
  methods: {
    fetchData() {
      console.log("fetching humidityDetails data");
      HTTP.get("/" + this.ville + "/humidityStats")
        .then(response => {
          this.currentHumidity = response.data.currentHumidity;
          this.meanHumidityForComingDays =
            response.data.meanHumidityForComingDays;
          this.driestDayPrevision = response.data.driestDayPrevision;
          console.log("ddPd", this.driestDayPrevision.date);
        })
        .catch(e => {
          this.errors = e;
        });
    }
  },
  mounted() {
    this.fetchData();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
