<template>
  <div>
    <p v-for="(item, index) in this.$store.state.ask" v-bind:key="index">
      <router-link :to="`/item/${item.id}`">{{ item.title }}</router-link>
      <small>{{ item.time_ago }} by {{ item.user }}</small>
    </p>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.dispatch('FETCH_ASKS')
  },
}
</script>

<style scoped>
</style>