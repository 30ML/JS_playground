<template>
  <div>
    <!-- 질문 상세 정보 -->
    <section>

      <div class="user-container">
        <div>
          <i class="fa fa-user" aria-hidden="true"></i>
        </div>
        <div class="user-description">
          <router-link :to="`/user/${item.user}`">
            {{ item.user }}
          </router-link>
          <div class="time">
            {{ item.time_ago }}
          </div>
        </div>
      </div>
      <h2>{{ item.title }}</h2>
    </section>
    <!-- 질문 댓글 -->
    <section>
      <!-- <p>{{ item.content }}</p> -->
      <div v-html="item.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      item: 'fetchedItemInfo'
    })
  },
  created() {
    const itemId = this.$route.params.id
    this.$store.dispatch('FETCH_ITEM_INFO', itemId)
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