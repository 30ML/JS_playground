const addOneItem = (state, todoItem) => {
  const obj = { completed: false, item: todoItem }

  state.todoItems.push(obj)
  localStorage.setItem(todoItem, JSON.stringify(obj))
}

const removeOneItem = (state, payload) => {
  const { todoItem, index } = payload

  state.todoItems.splice(index, 1);
  localStorage.removeItem(todoItem.item);
}

const toggleOneItem = (state, payload) => {
  const { todoItem, index } = payload

  state.todoItems[index].completed = !state.todoItems[index].completed
  localStorage.removeItem(todoItem.item);
  localStorage.setItem(todoItem.item, JSON.stringify(todoItem));
}

const clearAllItems = (state) => {
  state.todoItems = []
  localStorage.clear()
}

export { addOneItem, removeOneItem, toggleOneItem, clearAllItems }