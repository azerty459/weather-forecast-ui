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
export default {
  data() {
    return {
      citizen: {}
    };
  },
  http: {
    root: "http://localhost:3000"
  },
  created() {
    bus.$on("selectedCitizen", selectedCitizen => {
      this.$resource("citizens{/id}/details")
        .get({ id: selectedCitizen })
        .then(
          response => {
            this.citizen = response.data[0];
          },
          error => {
            console.log("error : ", error);
          }
        );
    });
  }
};
</script>