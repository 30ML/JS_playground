<template>
  <div>
    <p>name: {{ userInfo.id }}</p>
    <p>karma: {{ userInfo.karma }}</p>
    <p>created: {{ userInfo.created }}</p>
    <p v-if="userInfo.about">about: {{ userInfo.about }}</p>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      userInfo: 'fetchedUserInfo',
    }),
  },
  created() {
    const userName = this.$route.params.id // Dynamic Route Matching
    this.$store.dispatch('FETCH_USER_INFO', userName)
  }
}
</script>

<style scoped>
</style>