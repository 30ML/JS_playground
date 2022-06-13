<template>
  <div class="user-container">
    <div>
      <i class="fa fa-user" aria-hidden="true"></i>
    </div>
    <div class="user-description">
      <div>{{ userInfo.id }}</div>
      <div class="time">
        {{ userInfo.created }}
      </div>
    </div>
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
}
</script>

<style scoped>
.user-container {
  display: flex;
  align-items: center;
  padding: 0.5rem;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>