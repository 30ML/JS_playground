<template>
  <div id="app">
    <ToolBar></ToolBar>
    <Transition name="page">
      <router-view></router-view>
    </Transition>
  </div>
</template>

<script>
import ToolBar from './components/ToolBar.vue'

export default {
  components: {
    ToolBar,
  },
}
</script>

<style>
body {
  padding: 0;
  margin: 0;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s ease;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
