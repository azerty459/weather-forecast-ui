<template>
  <div>
    <button @click="search" class="button">search</button>
  </div>
</template>

<script>
import Vue from "vue";
import VueX, { mapActions } from "vuex";

Vue.use(VueX);
export default {
  methods: {
    ...mapActions({ search: "launchSearch" })
  }
};
</script>
