<template>
  <div>
    <h1>Meteo pour {{cityName}}</h1>
    <div>
      <b-row>
        <b-col>
          <b-button @click="shouldDisplayHottestDay">Le jour le plus chaud</b-button>
          <b-button @click="shouldDisplayRainyDay">Liste jour pluie</b-button>
          <b-button @click="shouldDisplayActualHumidity">Taux d'humidité actuel</b-button>
        </b-col>
      </b-row>
      <b-row>
        <b-col>
          <hottest-day v-if="this.isHottestDayDisplayed" :city="cityName"></hottest-day>
          <rainy-days v-if="this.isRainyDayDisplayed" :city="cityName"></rainy-days>
          <actual-humidity v-if="this.isActualHumidityDisplayed" :city="cityName"></actual-humidity>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import HottestDay from './HottestDay'
import RainyDays from './RainyDays'
import ActualHumidity from './ActualHumidity'
export default {
  components: {
    'hottest-day': HottestDay,
    'rainy-days': RainyDays,
    'actual-humidity': ActualHumidity
  },
  props: { cityName: String },
  data () {
    return {
      isHottestDayDisplayed: false,
      isRainyDayDisplayed: false,
      isActualHumidityDisplayed: false,
      city: ''
    }
  },
  methods: {
    shouldDisplayHottestDay () {
      this.isHottestDayDisplayed = !this.isHottestDayDisplayed
      this.isActualHumidityDisplayed = false
      this.isRainyDayDisplayed = false
    },
    shouldDisplayRainyDay () {
      this.isHottestDayDisplayed = false
      this.isActualHumidityDisplayed = false
      this.isRainyDayDisplayed = !this.isRainyDayDisplayed
    },
    shouldDisplayActualHumidity () {
      this.isHottestDayDisplayed = false
      this.isActualHumidityDisplayed = !this.isActualHumidityDisplayed
      this.isRainyDayDisplayed = false
    }
  }
}
</script>
