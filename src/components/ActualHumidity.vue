<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Humidité"
          :sub-title="nomville"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text
            v-for="(value, name) in actualhumidity"
            v-if="value !== null"
            :key="name"
            v-show="hasactualhumidity"
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
  props: { nomville: String },
  http: {
    root: 'http://localhost:8082/weather/'
  },
  mounted () {
    if (this.nomville == null) {
      this.load = false
      this.$route.push('/')
    } else {
      this.$resource('actualHumidity/' + this.nomville)
        .get()
        .then(response => {
          this.actualhumidity = response.data
        })
        .catch(response => {
          console.log('erreur api', response)
        })
    }
  },
  methods: {},
  computed: {
    hasactualhumidity () {
      return this.actualhumidity !== null
    }
  }
}
</script>
