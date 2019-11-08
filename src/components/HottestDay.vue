<template>
  <div>
    <b-row>
      <b-col>
        <b-card
          title="Le jour le plus chaud"
          :sub-title="nomville"
          img-top
          tag="article"
          style="max-width: 20rem;"
          class="mb-2"
        >
          <b-card-text
            v-for="value in hottestDays"
            v-if="value !== null"
            :key="value"
            v-show="hashottestday"
          >{{value}}</b-card-text>
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
  props: { nomville: String },
  http: {
    root: 'http://localhost:8082/weather/'
  },
  mounted () {
    if (this.nomville == null) {
      this.load = false
      this.$route.push('/')
    } else {
      this.$resource('hottestDay/' + this.nomville)
        .get()
        .then(response => {
          this.hottestDays = response.data
        })
        .catch(response => {
          console.log('erreur api', response)
        })
    }
  },
  computed: {
    hashottestday () {
      return this.hottestDays !== null
    }
  }
}
</script>
