
<template>
  <div class="col-lg-12 text-center">
    <h1>Prévisions météo</h1>
    <span>{{this.message}}</span>
  </div>

</template>

<script>
  export default {
    name: "HeaderPrevionMeteo",
    data: function() {
      return {
        message: "Date :" + new Date().toLocaleString()
      }

    },

  }
</script>

<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

</style>

