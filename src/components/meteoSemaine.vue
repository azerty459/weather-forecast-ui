<template>
  <div>
    <h1>Meteo pour la semaine</h1>
      <table>
        <tr>
          <td>Date</td>
          <td>Conditions</td>
          <td>Temperature minimale</td>
          <td>Temperature actuelle</td>
          <td>Temperature maximale</td>
          <td>Humidite</td>
        </tr>
        <tr v-for="element in previsions" v-bind:key="element">
          <td>{{element.date}}</td>
          <td>
            <img v-bind:src="element.icon"/><br/>{{element.condition_key}}<br/></td>
          <td v-if="element.tmin != 0">{{element.tmin}}°C</td>
          <td v-else>-</td>
          <td v-if="element.tmp != 0">{{element.tmp}}°C</td>
          <td v-else>-</td>
          <td v-if="element.tmin != 0">{{element.tmax}}°C</td>
          <td v-else>-</td>
          <td v-if="element.humidity != 0">{{element.humidity}}</td>
          <td v-else>-</td>
        </tr>
      </table>
  </div>
</template>
<script>
export default {
  props: ['previsions']
}
</script>
