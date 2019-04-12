<template>
  <div class="col s12">
    <table class="responsive-table centered">
      <thead class="grey-text text-darken-2">
        <tr>
          <th>Humidit&eacute; actuel</th>
          <th>Humidit&eacute; moyenne de la semaine</th>
          <th>Aujourd'hui est le jour le plus sec</th>
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
</template>

<script>
export default{
  props: ['actual', 'week', 'dry']
}
</script>

<style>

</style>
