<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Les jours où il pleut"
          :sub-title="city"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text v-for="name in rainydays" v-if="name !== null" :key="name">
            <ul>
              <li>{{name}}</li>
            </ul>
          </b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      rainydays: []
    }
  },
  props: { city: String },
  http: {
    root: 'http://localhost:8082/weather/'
  },
  mounted () {
    this.$resource('rainyDays/' + this.city)
      .get()
      .then(response => {
        this.rainydays = response.data.sort((a, b) => a - b)
      })
      .catch(response => {
        console.log('erreur api', response)
      })
  }
}
</script>
