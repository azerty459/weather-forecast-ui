<template>
  <div class="row text-center">
    <div class="col-lg-6 card" v-for="prevision in previsionsList" :key="prevision.name">
      <div class="content card-body">
        <div class="header">
          <span>{{prevision.date}}</span>
        </div>
        <div class="description">
          Température min :{{prevision.tempMin}}<br>
          Température max :{{prevision.tempMax}}<br>
          Condition : {{prevision.condition}}
        </div>
        <div>
          <div class="active title">
            <button class="btn btn-primary" type="button" data-toggle="collapse"
                    data-target="#previsionHoraire"
                    aria-expanded="false" aria-controls="collapseExample">
              Prévisions Horaire
            </button>
          </div>
          <div class="collapse" id="previsionHoraire">
            <div v-for="previsionHoraire in prevision.previsionHoraireList"
                 :key="previsionHoraire.heurePrevisionHoraire">
              <ul class="list-unstyled">
                <li>Heure :{{previsionHoraire.heurePrevisionHoraire}}</li>
                <li>Condition :{{previsionHoraire.condition}}</li>
                <li>Taux humidité :{{previsionHoraire.tauxHumidite}}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import VueX from 'vuex'

  export default {
    name: "Previsionliste",
    computed :{
      ...VueX.mapGetters(['previsionsList'])

    }

  }
</script>

<style scoped>

</style>
