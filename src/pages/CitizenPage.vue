<template>
  <div>
    test : {{test}}
    <br />
    id : {{id}}
    <citizens-list></citizens-list>
    <citizen-detail></citizen-detail>
  </div>
</template>

<script>
import CitizensList from "./../components/CitizensList";
import CitizenDetail from "./../components/CitizenDetail";
export default {
  components: { CitizensList, CitizenDetail },
  data() {
    return {
      test: String
    };
  },
  props: ["id"],
  mounted() {
    this.test = this.$route.query.test;
  }
};
</script>