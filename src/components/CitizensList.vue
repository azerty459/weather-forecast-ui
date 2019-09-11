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
  data() {
    return {
      citizens: []
    };
  },
  computed: {
    counter() {
      return this.citizens.length;
    }
  },
  http: {
    root: "http://localhost:3000"
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
    select(citizenSelected) {
      bus.$emit("selectedCitizen", citizenSelected.id);
    }
  }
};
</script>