<template>
  <div>
    <app-header 
      v-on:renew="renewStr" 
      v-bind:propsdata="str">
    </app-header>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'

export default {
  data() {
    return {
      str:' Hello',
    }
  },
  components: {
    'app-header': AppHeader,
  },
  methods: {
    renewStr: function() {
      this.str = 'Hi'
    },
  },
}
</script>

<style scoped>
  
</style>