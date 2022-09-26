<template>
  <div>
    <div v-for="(ask, index) in asks" v-bind:key="index">{{ ask.title }}</div>
  </div>
</template>

<script>
import { fetchAsksList } from '@/api'

export default {
  data() {
    return {
      asks: [],
    }
  },
  created() {
    fetchAsksList()
      .then(response => {
        this.asks = response.data
        console.log(this.asks)
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
</style>