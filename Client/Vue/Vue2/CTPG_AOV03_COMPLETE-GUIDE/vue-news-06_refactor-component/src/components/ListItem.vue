<template>
  <div>
    <ul class="item-list">
      <li class="post" v-for="(item, index) in listItems" v-bind:key="index">
        <!-- 포인트 영억 -->
        <div class="points">
          {{ item.points || '#' }}
        </div>
        <!-- 기타 정보 영역 -->
        <div>
          <!-- 타이틀 영역 -->
          <p class="item-title">
            <!-- domain(O): news, jobs -->
            <template v-if="item.domain">
              <div>
                <a :href="item.url">
                  {{ item.title }}
                </a>
              </div>
            </template>
            <!-- domain(X): ask -->
            <template v-else>
              <div>
                <router-link :to="`/item/${item.id}`">
                  {{ item.title }}
                </router-link>
              </div>
            </template>
          </p>
          <small class="link-text">
            {{ item.time_ago }}
            by
            <router-link v-if="item.user" class="link-text" :to="`/user/${item.user}`">
              {{ item.user }}
            </router-link>
            <a v-else :href="item.url">
              {{ item.domain }}
            </a>
          </small>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    listItems() {
      const name = this.$route.name
      switch (name) {
        case 'news':
          return this.$store.state.news
        case 'ask':
          return this.$store.state.ask
        case 'jobs':
          return this.$store.state.jobs
        default:
          return []
      }  
    }
  },
  created() {
    // const path =  this.$route.path === '/news'
    const name = this.$route.name
    switch (name) {
      case 'news':
        this.$store.dispatch('FETCH_NEWS')
        break;
      case 'ask':
        this.$store.dispatch('FETCH_ASK')
        break;
      case 'jobs':
        this.$store.dispatch('FETCH_JOBS')
        break;
    }
  },
}
</script>

<style scoped>
.post {
  list-style: none;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #EEE;
}

.points {
  width: 80px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #42B883;
}

.item-title {
  margin: 0;
}

.link-text {
  color: #828282;
}
</style>