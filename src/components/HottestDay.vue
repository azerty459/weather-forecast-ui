<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Le jour le plus chaud"
          :sub-title="city"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text v-for="value in hottestDays" v-if="value !== null" :key="value">{{value}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hottestDays: ''
    }
  },
  props: { city: String },
  http: {
    root: 'http://localhost:8082/weather/'
  },
  mounted () {
    this.$resource('hottestDay/' + this.city)
      .get()
      .then(response => {
        this.hottestDays = response.data
      })
      .catch(response => {
        console.log('erreur api', response)
      })
  }
}
</script>
