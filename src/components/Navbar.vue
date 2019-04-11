<template>
  <div class="mb-5">
    <b-navbar variant="info">
      <b-navbar-brand href="/" class="text-left">
        <img src="@/assets/logo.png" class="image-fluid" style="width:20%" alt="NEXTOO">
      </b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/previsions">Prévisions</b-nav-item>
          <b-nav-item href="/jour-chaud">Jour le plus chaud</b-nav-item>
          <b-nav-item href="/jour-pluie">Jour de pluie</b-nav-item>
          <b-nav-item href="/humidite">Humidité</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'Navbar'
}
</script>

<style>

</style>
