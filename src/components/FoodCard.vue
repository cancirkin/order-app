<template>
  <v-card
    class="d-flex flex-column mr-3 mb-3"
    max-width="380"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-overline mb-4">
          Food
        </div>
        <v-list-item-title class="text-h6 mb-1">
          {{ food.name }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ food.desc }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar
        size="80"
      />
      <img
        width="120"
        :src="food.img"
        alt=""
        srcset=""
      >
    </v-list-item>

    <v-card-actions>
      <v-btn
        outlined
        rounded
        text
        @click="addToOrderList(food)"
      >
        ADD
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
  export default { 
    props: {
      food: {
        type: Object,
        required: true
      },
    },
    methods: {
      addToOrderList() {
        this.$store.commit('addToOrderList', this.food)
      }
    },
  }
</script>

<style>

</style>