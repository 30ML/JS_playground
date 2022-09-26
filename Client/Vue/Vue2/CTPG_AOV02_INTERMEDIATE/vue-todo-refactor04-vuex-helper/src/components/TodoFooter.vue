<template>
  <div>
    <div class="clearAllContainer">
      <span class="clearAllBtn" v-on:click="clearTodo">Clear All</span>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    // clearTodo() {
    //   this.$store.commit('clearAllItems')
    // },
    ...mapMutations({
      clearTodo: 'clearAllItems',
    }),
  },
}
</script>

<style scoped>
.clearAllContainer {
  width: 8.5rem;
  height: 58px;
  line-height: 58px;
  background-color: white;
  border-radius: 5px;
  margin: 0 auto;
}
.clearAllBtn {
  color: #E20383;
  /* 추가 */
  display: block;
}
</style>