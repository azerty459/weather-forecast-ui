<template>
  <div>
    <ul v-for="citizen in citizens" :key="citizen.id">
      <li @click="select(citizen)">{{citizen.firstname}} {{citizen.lastname}}</li>
    </ul>
    <br />
    <p>total -> {{counter}}</p>
  </div>
</template>

<script>
import Vue from "vue";
import VueResource from "vue-resource";
import VueX from "vuex";

Vue.use(VueResource);
Vue.use(VueX);

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
    ...VueX.mapActions({
      selectCitizenStore: "selectCitizen"
    }),

    select(citizenSelected) {
      this.selectCitizenStore(citizenSelected.id);
    }
  }
};
</script>