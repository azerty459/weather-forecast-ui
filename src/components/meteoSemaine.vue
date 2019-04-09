<template>
  <div>
    <h1>Meteo pour la semaine</h1>
    <div>
      <b-card no-body>
        <b-tabs pills card vertical>
          <b-tab v-bind:id="element.date" v-for="(element, index) in previsions" v-bind:key="index">
              <template slot="title">
                <img v-bind:src="element.icon"/>
                <br/>
                {{element.date}}
              </template>
              <table>
                <tr>
                  <td>Temperature minimale</td>
                  <td>
                    <b-card-text v-if="element.tmin != 0">{{element.tmin}}°C</b-card-text>
                    <b-card-text v-else>-</b-card-text>
                  </td>
                </tr>
                <tr>
                  <td>Temperature actuelle</td>
                  <td>
                    <b-card-text v-if="element.tmp != 0">{{element.tmp}}°C</b-card-text>
                    <b-card-text v-else>-</b-card-text>
                  </td>
                </tr>
                <tr>
                  <td>Temperature maximale</td>
                  <td>
                    <b-card-text v-if="element.tmax != 0">{{element.tmax}}°C</b-card-text>
                    <b-card-text v-else>-</b-card-text>
                  </td>
                </tr>
                <tr>
                  <td>Humidite</td>
                  <td>
                    <b-card-text v-if="element.humidity != 0">{{element.humidity}}%</b-card-text>
                    <b-card-text v-else>-</b-card-text>
                  </td>
                </tr>
              </table>
          </b-tab>
        </b-tabs>
      </b-card>
    </div>
  </div>
</template>
<script>
import meteoJour from '@/components/meteoJour.vue'

export default {
  components: {meteoJour},
  props: ['previsions']
}
</script>
