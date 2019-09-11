<template>
  <div>
    <div>details</div>
    <table>
      <tr>id : {{citizen.id}}</tr>
      <tr>firstname : {{citizen.firstname}}</tr>
      <tr>lastname : {{citizen.lastname}}</tr>
    </table>
  </div>
</template>

<script>
import VueX from "vuex";

export default {
  computed: {
    ...VueX.mapGetters({ citizen: "selectedCitizen" })
  }
};
</script>