<template>
  <div>
    <input
      :value="search"
      v-on:input="updateSearch($event)"
      type="text"
      placeholder="Search a city"
    />
    {{search}}
  </div>
</template>

<script>
import VueX from "vuex";

export default {
  computed: {
    ...VueX.mapGetters({ search: "search" })
  },
  methods: {
    updateSearch(event) {
      this.$store.commit("SET_SEARCH", event.target.value);
    }
  }
};
</script>