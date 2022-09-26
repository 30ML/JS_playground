<template>
  <div>
    <div v-for="(user, index) in users" v-bind:key="index">{{ user.title }}</div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      users: [],
    }
  },
  created() {
    // var vm = this;
    axios.get('https://api.hnpwa.com/v0/news/1.json')
      // .then(function (response) {
      //   vm.users = response.data
      //   console.log(response)
      // })
      .then(response => this.users = response.data)
      .catch(error => console.log(error))
  },
}
</script>

<style scoped>

</style>