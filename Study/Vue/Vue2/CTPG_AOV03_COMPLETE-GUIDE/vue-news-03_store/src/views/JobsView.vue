<template>
  <div>
    <p v-for="(item, index) in fetchedJobs" v-bind:key="index">
      <a :href="item.url">{{ item.title }}</a>
      <small>{{ item.time_ago }}, {{ item.domain }}</small>
    </p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    // #2-2
    ...mapGetters([
      'fetchedJobs',
    ])

    // #2-1
    // ...mapGetters({
    //   fetchedJobs: 'fetchedJobs',
    // })

    // #1-2
    // ...mapState(['jobs']),

    // #1-1
    // ...mapState({
    //   asks: state => state.asks
    // })
  },
  created() {
    this.$store.dispatch('FETCH_JOBS')
  }
}
</script>

<style scoped>
</style>