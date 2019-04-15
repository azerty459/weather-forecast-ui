<template>
<div class="card col-md-4" style="width: 18rem;" >
  <img :src="icon" class="card-img-top" alt="...">
  <div class="card-body">
    <div class="jour">
    <h3>{{dayLong}}</h3><br>
    </div>
    <div class="infoJour">
      <table>
        <tr>
          <td class="cell">Condition:</td>
          <td class="cellres">{{condition}}</td>
        </tr>
        <tr>
          <td class="cell">Température Min:</td>
          <td class="cellres">{{tempMin}} °C</td>
        </tr>
        <tr>
          <td class="cell">Température Max:</td>
          <td class="cellres">{{tempMax}} °C</td>
        </tr>
      </table>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'icon', 'dayLong', 'condition', 'tempMin', 'tempMax'
  ]
}
</script>

<style>
.card{
  margin-bottom: 2%;
}
.jour{
  text-align: center;
}
.cell{
  width: 200px;
  height: 30px;
}
.cellres{
  text-align: center;
}
</style>
