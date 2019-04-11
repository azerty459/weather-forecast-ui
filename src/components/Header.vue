<template>
  <div>
    <div class="navbar-fixed">
      <nav class="blue accent-4">
        <div class="nav-wrapper">
          <div class="brand-logo hide-on-med-and-down"><img class="logo-img" src="@/assets/logo.png"></div>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <a href="#" class="brand-logo title center">Météo</a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li :class="active[0]"><a href="#">Prévisions</a></li>
            <li :class="active[1]"><a href="#">Jour le plus chaud</a></li>
            <li :class="active[2]"><a href="#">Jours de pluie</a></li>
            <li :class="active[3]"><a href="#">Humidite</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-nav">
      <li class="center margin-top"><img class="logo-img" src="@/assets/logo.png"></li>
      <hr>
      <li :class="active[0]"><a href="#">Prévisions</a></li>
      <li :class="active[1]"><a href="#">Jour le plus chaud</a></li>
      <li :class="active[2]"><a href="#">Jours de pluie</a></li>
      <li :class="active[3]"><a href="#">Humidite</a></li>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      active: ['active', '', '', ''],
      current: 0
    }
  },
  created () {
    window.bus.$on('newPage', (page) => {
      var index = 0
      switch (page) {
        case 'chaud':
          index = 1
          break
        case 'pluie':
          index = 2
          break
        case 'humide':
          index = 3
          break
      }
      this.active[this.current] = ''
      this.active[index] = 'active'
      this.current = index
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
