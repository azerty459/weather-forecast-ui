<template>
  <div>
    <h1>Meteo pour la semaine</h1>
    <div>
      <b-card no-body class="shadow-lg p-3 mb-5 bg-white rounded" style="max-width: 40rem;">
        <b-tabs pills card vertical>
          <b-tab v-bind:id="element.date" v-for="(element, index) in previsions" v-bind:key="index">
              <template slot="title">
                <img v-bind:src="element.icon"/>
                <br/>
                {{element.date}}
              </template>
                <b-card no-body>
                  <b-tabs card>
                    <b-tab title="Conditions" active>
                      <b-img v-bind:src="element.icon_big" v-bind:alt="element.condition_key"></b-img>
                      <b-card-text><strong>{{element.condition_key}}</strong></b-card-text>
                    </b-tab>
                    <b-tab title="Température">
                      <b-card-text><strong>Température minimale</strong></b-card-text>
                      <b-card-text v-if="element.tmin != 0">{{element.tmin}} <strong>°C</strong></b-card-text>
                      <b-card-text v-else>-</b-card-text>
                      <b-card-text><strong>Température actuelle</strong></b-card-text>
                      <b-card-text v-if="element.tmp != 0">{{element.tmp}} <strong>°C</strong></b-card-text>
                      <b-card-text v-else>-</b-card-text>
                      <b-card-text><strong>Température maximale</strong></b-card-text>
                      <b-card-text v-if="element.tmax != 0">{{element.tmax}} <strong>°C</strong></b-card-text>
                      <b-card-text v-else>-</b-card-text>
                    </b-tab>
                    <b-tab title="Humidité" active>
                      <b-card-text v-if="element.humidity != 0">{{element.humidity}}%</b-card-text>
                      <b-card-text v-else>-</b-card-text>
                    </b-tab>
                  </b-tabs>
                </b-card>
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
