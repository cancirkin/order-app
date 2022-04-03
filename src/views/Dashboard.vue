<template>
  <div>
    <v-row
      class="ma-0 pa-0"
      justify="center"
    >
      <v-col
        cols="8"
      >
        <LineChartGenerator
          :chart-options="chartOptions"
          :chart-data="chartData"
          :chart-id="chartId"
          :dataset-id-key="datasetIdKey"
          :width="width"
          :height="height"
        />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import { Line as LineChartGenerator } from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  } from 'chart.js'

  ChartJS.register(
    Title,
    Tooltip,
    Legend,
    LineElement,
    LinearScale,
    CategoryScale,
    PointElement
  )
  // @ is an alias to /src

  export default {
    name: 'Dashboard',
    components: {
      LineChartGenerator
    },
    props: {
      chartId: {
        type: String,
        default: 'line-chart'
      },
      datasetIdKey: {
        type: String,
        default: 'label'
      },
      width: {
        type: Number,
        default: 400
      },
      height: {
        type: Number,
        default: 400
      },
    },
    data() {
      return {
        chartData: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July'
          ],
          datasets: [
            {
              label: 'Monthly Sales',
              backgroundColor: '#f87979',
              data: [40, 39, 10, 40, 39, 80, 40]
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false
        }
      }
    },
  }
</script>
