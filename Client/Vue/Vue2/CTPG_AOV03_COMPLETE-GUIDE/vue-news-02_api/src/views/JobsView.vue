<template>
  <div>
    <div v-for="(job, index) in jobs" v-bind:key="index">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '@/api'

export default {
  data() {
    return {
      jobs: [],
    }
  },
  created() {
    fetchJobsList()
      .then(response => {
        this.jobs = response.data
        console.log(this.jobs)
      })
      .catch(error => console.log(error))
  }
}
</script>

<style scoped>
</style>