<template>
  <div class="slide">
    <h4 v-if="chart.id">D&eacute;tail du {{chart.id}}</h4>
    <canvas :id="chartId" :class="show"></canvas>
  </div>
</template>

<script>
export default{
  data () {
    return {
      chartId: 'canvasChart',
      chart: {id: null},
      chartInstance: null,
      show: {hide: true}
    }
  },
  props: {
    chartData: Array
  },
  created () {
    window.bus.$on('selectDay', (chart) => {
      if (chart != null && this.chart.id !== chart.id) {
        // eslint-disable-next-line
        $('.slide').css('display', '')
        this.chart = chart
        this.show.hide = false
        initChart(this)
      } else {
        // eslint-disable-next-line
        $('.slide').slideUp('slow')
        this.chart = {id: null}
        if (this.chartInstance != null) {
          this.chartInstance.destroy()
          this.chartInstance = null
        }
        this.show.hide = true
      }
    })
  }
}

/* eslint-disable */
function initChart(vue) {
  // Creation du tableaux de données
  var dataArray = [];
  vue.chart.data.forEach(elt => {
    dataArray.push({
      label: elt.label,
      borderColor: elt.color,
      data: elt.data,
      fill: false
    });
  });

  var ctx = document.getElementById(vue.chartId).getContext('2d');
  vue.chartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: [
        '00h00', '01h00', '02h00', '03h00', '04h00', '05h00', '06h00', '07h00', '08h00', '09h00', '10h00', '11h00', 
        '12h00', '13h00', '14h00', '15h00', '16h00', '17h00', '18h00', '19h00', '20h00', '21h00', '22h00', '23h00'
      ],
      datasets: dataArray
    }
  });
  return true
}
</script>

<style>

</style>
