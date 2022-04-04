<template>
  <v-container>
    <v-row
      class="ma-0"
      justify="center"
    >
      <v-chip
        v-for="(item, index) in getOrderList"
        :key="index"
        class="ma-2"
        close
        @click:close="removeFromOrderList(index)"
      >
        {{ item.name + ' - ' + item.price + '₺' }}
      </v-chip>
    </v-row>
    <v-row
      justify="center"
      class="pa-3 ma-0"
    >
      <FoodCard
        v-for="(food, i) in getFoodList"
        :key="i"
        :food="food"
      />
    </v-row>
  </v-container>
</template>

<script>
  import FoodCard from '../components/FoodCard.vue'
  import {mapGetters} from 'vuex'

  export default {
    name: 'Home',
    components: { FoodCard },
    computed: {
      ...mapGetters(['getFoodList']),
      ...mapGetters(['getOrderList'])
    },
    methods: {
      removeFromOrderList(index) {
        this.$store.commit('removeFromOrderList', index)
      },
    },
  }
</script>
