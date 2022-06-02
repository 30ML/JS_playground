<template>
  <div class="inputBox shadow">
    <input type="text" v-model="newTodoItem" v-on:keyup.enter="addTodo">
    <!-- <button v-on:click="addTodo">add</button> -->
    <span class="addContainer">
      <i class="fas fa-plus addBtn" v-on:click="addTodo"></i>
    </span>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      newTodoItem: '',
    }
  },
  methods: {
    // Local Storage 저장
    addTodo: function() {
      if (this.newTodoItem !== '') {
        console.log(`addTodo() ${this.newTodoItem}`)

        var obj = { completed: false, item: this.newTodoItem }
        localStorage.setItem(this.newTodoItem, JSON.stringify(obj)) // (key, value)

        this.clearInput()
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
</style>