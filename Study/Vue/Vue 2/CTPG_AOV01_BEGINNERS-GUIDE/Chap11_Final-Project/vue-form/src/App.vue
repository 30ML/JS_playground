<template>
  <div>
    <form v-on:submit.prevent="submitForm"> <!-- Prevent Refresh after Submit (Vue's way) -->
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data: function() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    // submitForm: function(event) {
      // event.preventDefault() // Prevent Refresh after Submit (Vanilla JS's way)
    submitForm: function() {
      console.log(`username: ${this.username} / password: ${this.password}`)

      var url = 'https://jsonplaceholder.typicode.com/users'
      var data = {
        username: this.username,
        password: this.password,
      }

      axios.post(url, data)
        .then(function(response){
          console.log(response)
        })
        .catch(function(error) {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
  
</style>