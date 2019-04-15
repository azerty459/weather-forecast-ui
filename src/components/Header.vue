<template>
<nav class="navbar navbar-primary bg-primary">
  <div>
    <img class="logo" src="./../assets/logo_soleil.png">
  </div>
  <div class="titleHead">
  <h2>METEO DES VILLES</h2>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style>
.logo{
  position: relative;
  width: 68px;
  height: 40px;
}
h2{
  color:white;
}
.titleHead{
  font-family: Georgia, 'Times New Roman', Times, serif;
  position: relative;
  margin-left: auto;
  margin-right: auto;
}
</style>
