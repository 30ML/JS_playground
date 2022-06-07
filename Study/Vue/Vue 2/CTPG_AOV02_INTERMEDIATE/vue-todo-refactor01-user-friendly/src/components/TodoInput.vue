<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>

    <custom-modal v-if="showModal" @close="showModal = false">
      <h1 slot="header">
        경고!
        <i class="fas fa-times closeModalBtn" @click="showModal=false"></i>
      </h1>
      <p slot="body">무언가를 입력하세요.</p>
      <p slot="footer">copyright</p>
    </custom-modal>
  </div>
</template>

<script>
import CustomModal from '@/components/common/CustomModal.vue'

export default {
  components: {
    'custom-modal': CustomModal,
  },
  data: function() {
    return {
      newTodoItem: '',
      showModal: false,
    }
  },
  methods: {
    // Local Storage 저장
    addTodo: function() {
      if (this.newTodoItem !== '') {
        this.$emit('addTodoItem', this.newTodoItem) // this.$emit('이벤트 이름', 인자1, 인자2, ...)

        this.clearInput()
      } else {
        this.showModal = true
      }
    },
    // 초기화
    clearInput: function() {
      this.newTodoItem = ''
    }
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