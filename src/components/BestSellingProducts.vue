<template>
  <v-card
    class="pa-4"
    elevation="3"
  >
    <v-card-title>
      Best Selling Products
    </v-card-title>
    <Bar
      :chart-options="chartOptions"
      :chart-data="chartData"
      :chart-id="chartId"
      :dataset-id-key="datasetIdKey"
      :width="width"
      :height="height"
    />
  </v-card>
</template>

<script>
  import { Bar } from 'vue-chartjs/legacy'

  import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
  } from 'chart.js'

  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

  export default {
    components: {
      Bar
    },
    props: {
      chartId: {
        type: String,
        default: 'bar-chart'
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
      cssClasses: {
        default: '',
        type: String
      },
      styles: {
        type: Object,
        default: () => {}
      },
      plugins: {
        type: Array,
        default: () => []
      }
    },
    data() {
      return {
        chartData: {
          labels: [
            'Köfte',
            'Sucuk Ekmek',
            'Beyti',
            'Adana Dürüm',
            'Urfa Dürüm',
            'Lahmacun',
            'Mercimek Çorbası',
            'İçli Köfte',
            'Karışık Izgara',
            'Bonfile',
            'Dallas Steak',
          ],
          datasets: [
            {
              backgroundColor: '#f87979',
              data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12],
            }
          ]
        },
        chartOptions: {
          responsive: true,
          maintainAspectRatio: false,
          plugins:{
            legend:{
              display:false
            }
          }
        }
      }
    }
  }
</script>

<style>

</style>