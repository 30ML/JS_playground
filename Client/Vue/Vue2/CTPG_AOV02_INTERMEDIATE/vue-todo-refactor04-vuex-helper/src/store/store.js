import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
  fetch() {
    const arr = []

    if (localStorage.length > 0) {
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage.key(i) === "loglevel:webpack-dev-server") continue;
        arr.push(
          JSON.parse(localStorage.getItem(localStorage.key(i)))
        );
      }
    }

    return arr
  },
}

export const store = new Vuex.Store({
  state: {
    todoItems: storage.fetch(),
  },
  getters: {
    storedTodoItems(state) {
      return state.todoItems
    },
  },
  mutations: {
    addOneItem(state, todoItem) {
      const obj = { completed: false, item: todoItem }

      state.todoItems.push(obj)
      localStorage.setItem(todoItem, JSON.stringify(obj))
    },
    removeOneItem(state, payload) {
      const { todoItem, index } = payload

      state.todoItems.splice(index, 1);
      localStorage.removeItem(todoItem.item);
    },
    toggleOneItem(state, payload) {
      const { todoItem, index } = payload

      state.todoItems[index].completed = !state.todoItems[index].completed
      localStorage.removeItem(todoItem.item);
      localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
    },
    clearAllItems(state) {
      state.todoItems = []
      localStorage.clear()
    },
  },
});