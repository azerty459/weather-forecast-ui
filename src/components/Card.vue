<template>
<div class="col-md-4">
  <div class="card">
    <img :src="icon" class="card-img-top" alt="...">
    <div class="card-body">
      <div class="jour">
        <h3>{{dayLong}}</h3>
        <h4>{{date}}</h4>
        <hr>
      </div>
      <div>
        <br>
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
        <br>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Card',
  props: [
    'icon', 'dayLong', 'date', 'condition', 'tempMin', 'tempMax'
  ]
}
</script>

<style>
.card{
  margin-bottom: 8%;
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
td{
  font-family: Georgia, 'Times New Roman', Times, serif;
  font-size: 1.2em;
}
</style>
