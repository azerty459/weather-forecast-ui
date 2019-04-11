<template>

    <b-card
    border-variant="info"
    :header="prevision.jour + ' ' + prevision.date"
    header-bg-variant="info"
    header-text-variant="white"
    align="center"
    >

        <h4 slot="header">{{ prevision.jour + ' ' + prevision.date }}</h4>
        <img :src="prevision.icone" class="img-fluid">
        <b-card-text class="h4"><b>{{ prevision.condition}}</b></b-card-text>
        <b-card-text class="h5">
          <i class="fas fa-temperature-low mr-2 fa-2x"></i>
          <b>{{ prevision.tmpMin}} °C</b>
        </b-card-text>
        <b-card-text  class="h5">
          <i class="fas fa-temperature-high mr-2 fa-2x"></i>
          <b>{{ prevision.tmpMax}} °C</b>
        </b-card-text>
  </b-card>
</template>

<script>

export default {
  name: 'Prevision',
  props: {
    prevision: Object
  }
}
</script>

<style>

</style>
