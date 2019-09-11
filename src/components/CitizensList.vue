<template>
  <div>
    <ul v-for="citizen in citizens" :key="citizen.id">
      <li @click="select(citizen)">{{citizen.firstname}} {{citizen.lastname}}</li>
    </ul>
    <!-- <button @click="addCitizen">add</button> -->
    <br />
    <p>total -> {{counter}}</p>
  </div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
Vue.use(VueResource);

export default {
  props: ["firstname", "lastname"],
  data() {
    return {
      citizens: [],
      count: 0
    };
  },
  computed: {
    counter() {
      return this.citizens.length;
    }
  },
  mounted() {
    this.$resource("citizens")
      .get()
      .then(
        response => {
          this.citizens = response.data;
        },
        error => {
          console.log("erreur", error);
        }
      );
  },
  methods: {
    addCitizen() {
      this.citizens.push({
        id: this.count++,
        firstname: "a" + this.count,
        lastname: "b" + this.count
      });
    },
    select(citizen) {
      this.$emit("selected", citizen);
    }
  },
  http: {
    root: "http://localhost:3000"
  }
};
</script>