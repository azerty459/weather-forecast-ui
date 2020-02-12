<template>
  <div id="compContainer">
    <prevision-item
      v-for="(p, i) in this.previsions"
      :key="p.date"
      :prevision="p"
      :index="i"
      :styleOption="getStyle(p)"
    />
  </div>
</template>

<script>
import PrevisionItem from "./PrevisionItem.vue";
import { HTTP } from "../http-constants";

export default {
  name: "PrevisionsList",
  components: {
    PrevisionItem
  },
  props: ["type", "ville"],
  data() {
    return {
      previsions: null,
      hottestDayTime: null,
      rainyDaysTimes: null
    };
  },
  methods: {
    fetchData() {
      HTTP.get("/" + this.ville + "/")
        .then(response => {
          this.previsions = response.data;
        })
        .catch(e => {
          this.errors = e;
        });
      switch (this.type) {
        case "hot":
          HTTP.get("/" + this.ville + "/hottestday")
            .then(response => {
              this.hottestDayTime = new Date(response.data.date).getTime();
            })
            .catch(e => {
              this.errors = e;
            });
          break;
        case "rain":
          HTTP.get("/" + this.ville + "/rainydays")
            .then(response => {
              this.rainyDaysTimes = response.data.map(rainyDayObj =>
                new Date(rainyDayObj.date).getTime()
              );
            })
            .catch(e => {
              this.errors = e;
            });
          break;
        default:
          break;
      }
    },
    getStyle(givenPrevision) {
      if (givenPrevision == null) {
        return null;
      }
      let givenPrevisionTime = new Date(givenPrevision.date).getTime();
      switch (this.type) {
        case "hot":
          if (this.hottestDayTime == givenPrevisionTime) {
            return "hot";
          }
          break;
        case "rain":
          if (this.rainyDaysTimes.some(rdt => rdt == givenPrevisionTime)) {
            return "rainy";
          }
          break;
        default:
          return null;
      }
    }
  },
  mounted() {
    this.fetchData();
  },
  watch: {
    $route(to, from) {
      this.fetchData();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.compContainer {
}
</style>
