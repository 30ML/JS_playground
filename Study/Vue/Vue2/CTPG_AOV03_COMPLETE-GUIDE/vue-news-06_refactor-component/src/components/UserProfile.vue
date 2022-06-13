<template>
  <div class="user-container">
    <div>
      <i class="fa fa-user"></i>
    </div>
    <div class="user-description">
      <template v-if="info.id">
        <div>{{ userInfo.id }}</div>
      </template>
      <template v-else>
        <div>{{ userInfo.user }}</div>
      </template>
      <div class="time">
        {{ userInfo.created }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    userInfo: Object,
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