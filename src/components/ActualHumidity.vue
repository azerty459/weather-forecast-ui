<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Humidité"
          :sub-title="city"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text
            v-for="(value, name) in actualhumidity"
            v-if="value !== null"
            :key="name"
          >Taux actuel : {{value + " %"}}</b-card-text>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      actualhumidity: []
    }
  },
  props: { city: String },
  http: {
    root: 'http://localhost:8082/weather/'
  },
  mounted () {
    this.$resource('actualHumidity/' + this.city)
      .get()
      .then(response => {
        this.actualhumidity = response.data
      })
      .catch(response => {
        console.log('erreur api', response)
      })
  }
}
</script>
