<template>
  <div>
    <div class="navbar-fixed">
      <nav class="blue accent-4">
        <div class="nav-wrapper">
          <div class="brand-logo hide-on-med-and-down"><img class="logo-img" src="@/assets/logo.png"></div>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <a href="#" class="brand-logo title center">M&eacute;t&eacute;o</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li v-bind:class="pagePrevision"><router-link :to="'/prevision'">Prévisions</router-link></li>
            <li v-bind:class="pageChaleur"><router-link :to="'/chaleur'">Jour le plus chaud</router-link></li>
            <li v-bind:class="pagePluie"><router-link :to="'/pluie'">Jours de pluie</router-link></li>
            <li v-bind:class="pageHumidite"><router-link :to="'/humidite'">Humidit&eacute;</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-nav">
      <li class="center margin-top"><img class="logo-img" src="@/assets/logo.png"></li>
      <hr>
      <li v-bind:class="pagePrevision"><router-link :to="'/prevision'">Prévisions</router-link></li>
      <li v-bind:class="pageChaleur"><router-link :to="'/chaleur'">Jour le plus chaud</router-link></li>
      <li v-bind:class="pagePluie"><router-link :to="'/pluie'">Jours de pluie</router-link></li>
      <li v-bind:class="pageHumidite"><router-link :to="'/humidite'">Humidit&eacute;</router-link></li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      pagePrevision: {'active': true},
      pageChaleur: {'active': false},
      pagePluie: {'active': false},
      pageHumidite: {'active': false}
    }
  },
  created () {
    window.bus.$on('newPage', (page) => {
      this.pagePrevision.active = false
      this.pageChaleur.active = false
      this.pagePluie.active = false
      this.pageHumidite.active = false

      switch (page) {
        case '/chaleur':
          this.pageChaleur.active = true
          break
        case '/pluie':
          this.pagePluie.active = true
          break
        case '/humidite':
          this.pageHumidite.active = true
          break
        default:
          this.pagePrevision.active = true
      }
    })
  }
}

/* eslint-disable */
$(document).ready(function(){
  $('.sidenav').sidenav();
});
</script>

<style>
.logo-img{
  margin: 0.2em;
  height: 52px;
}
.title{
  font-size: 3em !important;
}
</style>
