<template>
  <div class="container col-sm-6 text-left h5">
   <!--  <h1>Informations ville</h1>
    <p><b>Ville : </b>{{ villeInfo.nom }}</p>
    <p><b>Pays : </b>{{ villeInfo.pays }}</p>
    <p><b>Longitude : </b>{{ villeInfo.longitude }}<b class="ml-4">Latitude : </b>
      {{ villeInfo.latitude }}
    </p>
    <p><b>Altitude : </b>{{ villeInfo.altitude }} mètres</p> -->

    <b-card
    border-variant="warning"
    header-bg-variant="warning"
    header-text-variant="light"
    align="left"
    >

    <h3 slot="header" class="text-left">Informations ville</h3>

    <p><i class="fas fa-city mr-2"></i>{{ villeInfo.nom }}</p>
    <p><i class="fas fa-flag mr-2"></i>{{ villeInfo.pays }}</p>
    <p><i class="far fa-compass mr-2"></i><b>Longitude : </b>{{ villeInfo.longitude }}<b class="ml-4">Latitude : </b>
      {{ villeInfo.latitude }}
    </p>
    <p><i class="fas fa-mountain mr-2"></i>{{ villeInfo.altitude }} mètres</p>
  </b-card>

</div>
</template>

<script>

  export default {
    name: 'VilleInfo',
    props: {
      villeInfo: Object
    }
  }
</script>

<style>

</style>
