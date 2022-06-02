<template>
  <div>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">add</button>
  </div>
</template>

<script>
export default {
  props: ['propsdata'],
  methods: {
    sendEvent: function() {
      this.$emit('renew')
    }
  }
}
</script>

<style scoped>
  
</style>