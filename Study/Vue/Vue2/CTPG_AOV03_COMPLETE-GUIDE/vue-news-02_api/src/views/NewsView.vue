<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    fetchNewsList()
      .then(response => {
        this.users = response.data
        console.log(this.users)
      })
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>

</style>