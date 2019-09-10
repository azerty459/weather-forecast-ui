<template>
  <div>
    <citizens-list v-on:selected="setSelected($event)"></citizens-list>
    <citizen-detail :citizen="selectedCitizen"></citizen-detail>
  </div>
</template>

<script>
import CitizensList from "./../components/CitizensList";
import CitizenDetail from "./../components/CitizenDetail";
export default {
  components: { CitizensList, CitizenDetail },
  data() {
    return {
      selectedCitizen: {}
    };
  },
  methods: {
    setSelected(selectedCitizen) {
      this.selectedCitizen = selectedCitizen;
      console.log(this.selectedCitizen);
    }
  }
};
</script>