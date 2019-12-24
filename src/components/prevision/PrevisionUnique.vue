<template>
  <div class="row text-center">
    <div class="col-lg-12 card">
      <div class="content card-body">
        <div class="header">
          <span>{{previsionUnique.date}}</span>
        </div>
        <div class="description">
          Température max :{{previsionUnique.tempMax}}<br>
        </div>
        <div class="description">
          Température min :{{previsionUnique.tempMin}}<br>
          Condition : {{previsionUnique.condition}}
        </div>
        <div>
          <div class="active title">
            <button class="btn btn-primary" type="button" data-toggle="collapse"
                    data-target="#previsionUnique-date"
                    aria-expanded="false" aria-controls="collapseExample">
              Prévisions Horaire
            </button>
          </div>
          <div class="collapse" id="previsionUnique-date">
            <div v-for="previsionHoraire in previsionUnique.previsionHoraireList"
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
    name: "previsionUnique",
    computed :{
    ...VueX.mapGetters(['previsionUnique'])

  }

  }
</script>

<style scoped>

</style>
