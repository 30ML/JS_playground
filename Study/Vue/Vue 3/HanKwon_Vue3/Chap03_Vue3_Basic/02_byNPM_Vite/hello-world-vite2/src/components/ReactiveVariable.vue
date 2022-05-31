<template>
  <p>줄임말과 원래말을 입력하세요.</p>
  <input type="text" :value="abbr"/>
  <input type="text" v-model="normal">
  <hr/>
  <abbr :title="normal">{{ abbr }}</abbr>
</template>

<script>
import { ref } from 'vue'

export default {
  // Composition API
  setup() {
    const abbr = ref('DOPT')
    const normal = ref('Dong Project Team')

    return {
      abbr,
      normal,
    }
  }

}

const count = ref(0)
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
