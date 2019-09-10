<template>
  <div id="app">
    <citizen-page></citizen-page>
  </div>
</template>

<script>
import CitizenPage from "./pages/CitizenPage";

export default {
  name: "App",
  components: { CitizenPage }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
