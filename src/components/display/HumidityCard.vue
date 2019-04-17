<template>
  <div>
    <div class="hide-on-small-only">
      <div class="col s12">
        <table>
          <thead>
            <th colspan="2" class="thead center">Informations sur l'humidit&eacute; des 5 prochains jours</th>
          </thead>
          <tbody>
            <tr class="trow">
              <td class="tcell grey-text text-darken-2">Humidit&eacute; actuel</td>
              <td class="tcell">{{actual}} &percnt;</td>
            </tr>
            <tr class="trow">
              <td class="tcell grey-text text-darken-2">Humidit&eacute; moyenne de la semaine</td>
              <td class="tcell">{{week.toFixed(2)}} &percnt;</td>
            </tr>
            <tr class="trow">
              <td class="tcell grey-text text-darken-2">Journ&eacute;e la plus sec</td>
              <td v-if="dry" class="tcell"><i class="material-icons green-text">check_circle</i></td>
              <td v-else class="tcell"><i class="material-icons red-text">cancel</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="hide-on-med-and-up">
      <div class="col s12">
        <div class="thead center">Informations sur l'humidit&eacute; des 5 prochains jours</div>
        <table class="responsive-table centered">
          <thead class="grey-text text-darken-2">
            <tr>
              <th>Humidit&eacute; actuel</th>
              <th>Humidit&eacute; moyenne de la semaine</th>
              <th>Journ&eacute;e la plus sec</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{actual}} &percnt;</td>
              <td>{{week.toFixed(2)}} &percnt;</td>
              <td v-if="dry"><i class="material-icons green-text">check_circle</i></td>
              <td v-else><i class="material-icons red-text">cancel</i></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default{
  props: {
    actual: Number,
    week: Number,
    dry: Boolean
  }
}
</script>

<style scoped>
.tcell {
  width: 50%;
}
.tcell:nth-child(even) {
  border-left: 1px solid rgba(0,0,0,0.12);
  text-align: center;
}
.trow {
  border: none;
}
.trow:nth-child(even) {
  border-top: 1px solid rgba(0,0,0,0.12);
  border-bottom: 1px solid rgba(0,0,0,0.12);
}
.thead {
  font-size: 1.2em;
}
</style>
