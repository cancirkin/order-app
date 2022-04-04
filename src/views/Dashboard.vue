<template>
  <div>
    <v-row
      class="ma-0 pa-0"
      justify="center"
    >
      <v-col
        cols="8"
      >
        <MonthlySalesChart />
      </v-col>
    </v-row>
    <v-row
      class="ma-0 pa-0"
      justify="center"
    >
      <v-col
        cols="8"
      >
        <BestSellingProducts />
      </v-col>
    </v-row>
  </div>
</template>

<script>
  import MonthlySalesChart from '../components/MonthlySalesChart.vue'
  import BestSellingProducts from '../components/BestSellingProducts.vue'

  export default {
    name: 'Dashboard',
    components: {
      MonthlySalesChart,
      BestSellingProducts
    },
    
  }
</script>
