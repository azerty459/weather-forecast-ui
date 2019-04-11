<template>
  <div class="container col-sm-6 text-left">
    <!-- <h1>Conditions actuelles</h1>
    <p><b>Température : </b>{{ conditions.temperatureActuelle }} °C</p>
    <p><b>Humidité : </b>{{ conditions.humidite }} %</p> -->

    <b-card
    border-variant="primary"
   
    header-bg-variant="primary"
    header-text-variant="light"
    align="center"
    >
    <h3 slot="header" class="text-left">Actuellement</h3>
    <div class="h1">
    	<div class="col-sm-12 mb-3">
    		<i class="fas fa-thermometer-three-quarters mr-2 fa-2x"></i>
    		{{ conditions.temperatureActuelle }} °C
    	</div>
    	<div class="col-sm-12">
    	<i class="fas fa-tint fa-2x mr-2"></i>
    	{{ conditions.humidite }} %
    	</div>
    </div>
    
  </b-card>
   
  </div>
</template>

<script>

export default {
  name: 'ConditionsCourantes',
  props: {
    conditions: Object
  }
}
</script>

<style>

</style>
