<template>
  <div>
    <div class="navbar-fixed">
      <nav class="blue accent-4">
        <div class="nav-wrapper">
          <div class="brand-logo hide-on-med-and-down"><a href="https://www.nextoo.fr" target="_blank"><img class="logo-img" src="@/assets/logo.png"></a></div>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <router-link :to="'/'" class="brand-logo title center">M&eacute;t&eacute;o</router-link>
          <ul id="nav" class="right hide-on-med-and-down">
            <li v-bind:class="pagePrevision"><router-link :to="'/prevision'">Prévisions</router-link></li>
            <li v-bind:class="pageChaleur"><router-link :to="'/chaleur'">Jour le plus chaud</router-link></li>
            <li v-bind:class="pagePluie"><router-link :to="'/pluie'">Jours de pluie</router-link></li>
            <li v-bind:class="pageHumidite"><router-link :to="'/humidite'">Humidit&eacute;</router-link></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-nav">
      <li class="center margin-top"><a href="https://www.nextoo.fr"><img class="logo-img" src="@/assets/logo.png"></a></li>
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
      pagePrevision: {'active': false},
      pageChaleur: {'active': false},
      pagePluie: {'active': false},
      pageHumidite: {'active': false}
    }
  },
  created () {
    var url = location.pathname.split('/')
    if (url.length > 1) {
      setActive(this, url[1])
    }

    window.bus.$on('newPage', (page) => {
      setActive(this, page.split('/')[1])
    })
  }
}

function setActive (vue, page) {
  vue.pagePrevision.active = false
  vue.pageChaleur.active = false
  vue.pagePluie.active = false
  vue.pageHumidite.active = false

  switch (page) {
    case 'chaleur':
      vue.pageChaleur.active = true
      break
    case 'pluie':
      vue.pagePluie.active = true
      break
    case 'humidite':
      vue.pageHumidite.active = true
      break
    default:
      vue.pagePrevision.active = true
  }
}

/* eslint-disable */
$(document).ready(function(){
  $('.sidenav').sidenav();
  $("li").on('click', function() {
    if($('#search_city').val().trim() !== '') {
      $('#search_btn').click()
    }
  });
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
