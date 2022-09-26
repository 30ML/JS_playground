<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <span class="addContainer">
      <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <CustomModal v-if="showModal" @close="showModal = false">
      <h1 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal=false"></i>
      </h1>
      <p slot="body">무언가를 입력하세요.</p>
      <p slot="footer">copyright</p>
    </CustomModal>
  </div>
</template>

<script>
import CustomModal from '@/components/common/CustomModal.vue'

export default {
  components: {
    CustomModal,
  },
  data() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    addTodo() {
      if (this.newTodoItem !== '') {
        const text = this.newTodoItem.trim()
        this.$store.commit('addOneItem', text)

        this.clearInput()
      } else {
        this.showModal = true
      }
    },
    clearInput() {
      this.newTodoItem = ''
    },
  },
}
</script>

<style scoped>
input:focus {
  outline: none;
}
.inputBox {
  background: white;
  height: 50px;
  line-height: 50px;
  border-radius: 5px;
}
.inputBox input {
  border-style: none;
  font-size: 0.9rem;
}
.addContainer {
  float: right;
  background: linear-gradient(to right, #6478FB, #8763FB);
  display: block;
  width: 3rem;
  border-radius: 0 5px 5px 0;
}
.addBtn {
  color: white;
  vertical-align: middle;
}
.closeModalBtn {
  color: #42B983;
}
</style>