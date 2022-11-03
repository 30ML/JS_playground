import '@fortawesome/fontawesome-free/js/all.min.js'
import '../scss/style.scss'

class Router {
  routes = []

  notFoundCallback = () => {}

  init() {
    window.addEventListener('hashchange', this.checkRoute.bind(this))
    if (!window.location.hash) {
      window.location.hash = '#/'
    }
    this.checkRoute()
  }

  addRoute(url, callback) {
    this.routes.push({
      url,
      callback,
    })
    return this
  }

  checkRoute() {
    const currentRoute = this.routes.find(
      route => route.url === window.location.hash,
    )
    if (!currentRoute) {
      this.notFoundCallback()
      return
    }
    currentRoute.callback()
  }

  setNotFound(callback) {
    this.notFoundCallback = callback
    return this
  }
}

class Storage {
  LOCAL_STORAGE_KEY = 'todos'

  saveTodo(id, content) {
    const todosData = this.getTodos()
    todosData.push({ id, content, status: 'TODO' })
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(todosData))
  }

  editTodo(id, content, status = 'TODO') {
    const todosData = this.getTodos()
    const todoIndex = todosData.findIndex(todo => todo.id == id)
    const targetTodoData = todosData[todoIndex]
    const editedTodoData =
      content === ''
        ? { ...targetTodoData, status }
        : { ...targetTodoData, content }
    todosData.splice(todoIndex, 1, editedTodoData)
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(todosData))
  }

  deleteTodo(id) {
    const todosData = this.getTodos()
    todosData.splice(
      todosData.findIndex(todo => todo.id == id),
      1,
    )
    localStorage.setItem(this.LOCAL_STORAGE_KEY, JSON.stringify(todosData))
  }

  getTodos() {
    return localStorage.getItem(this.LOCAL_STORAGE_KEY) === null
      ? []
      : JSON.parse(localStorage.getItem(this.LOCAL_STORAGE_KEY))
  }
}

class TodoList {
  inputContainerEl
  inputAreaEl
  inputEl
  addBtnEl
  todoContainerEl
  todoListEl

  constructor(storage) {
    this.initStorage(storage)
    this.assignElement()
    this.addEvent()
    this.loadSavedData()
  }

  initStorage(storage) {
    this.storage = storage
  }

  loadSavedData() {
    const todosData = this.storage.getTodos()
    for (const todoData of todosData) {
      const { id, content, status } = todoData
      this.createTodoElement(id, content, status)
    }
  }

  assignElement() {
    this.inputContainerEl = document.getElementById('input-container')
    this.inputAreaEl = this.inputContainerEl.querySelector('#input-area')
    this.inputEl = this.inputAreaEl.querySelector('#todo-input')
    this.addBtnEl = this.inputAreaEl.querySelector('#add-btn')
    this.todoContainerEl = document.getElementById('todo-container')
    this.todoListEl = this.todoContainerEl.querySelector('#todo-list')
    this.radioAreaEl = this.inputContainerEl.querySelector('#radio-area')
    this.filterRadioBtnEls = this.radioAreaEl.querySelectorAll(
      'input[name="filter"]',
    )
  }

  addEvent() {
    this.addBtnEl.addEventListener('click', this.onClickAddBtn.bind(this))
    this.todoListEl.addEventListener('click', this.onClickTodoList.bind(this))
    this.addRadioBtnEvent()
  }

  addRadioBtnEvent() {
    for (const filterRadioBtnEl of this.filterRadioBtnEls) {
      filterRadioBtnEl.addEventListener(
        'click',
        this.onClickRadioBtn.bind(this),
      )
    }
  }

  onClickRadioBtn(event) {
    const { value } = event.target
    window.location.href = `#/${value.toLowerCase()}`
  }

  filterTodo(status) {
    const todoDivEls = this.todoListEl.querySelectorAll('div.todo')
    for (const todoDivEl of todoDivEls) {
      switch (status) {
        case 'ALL':
          todoDivEl.style.display = 'flex'
          break
        case 'DONE':
          todoDivEl.style.display = todoDivEl.classList.contains('done')
            ? 'flex'
            : 'none'
          break
        case 'TODO':
          todoDivEl.style.display = todoDivEl.classList.contains('done')
            ? 'none'
            : 'flex'
          break
      }
    }
  }

  onClickTodoList(event) {
    const { target } = event
    const btn = target.closest('button')
    if (!btn) return
    if (btn.matches('#delete-btn')) {
      this.deleteTodo(target)
    } else if (btn.matches('#edit-btn')) {
      this.editTodo(target)
    } else if (btn.matches('#save-btn')) {
      this.saveTodo(target)
    } else if (btn.matches('#complete-btn')) {
      this.completeTodo(target)
    }
  }

  deleteTodo(target) {
    const todoDiv = target.closest('.todo')
    todoDiv.classList.add('delete')
    todoDiv.addEventListener('transitionend', () => {
      todoDiv.remove()
    })
    this.storage.deleteTodo(todoDiv.dataset.id)
  }

  editTodo(target) {
    const todoDiv = target.closest('.todo')
    const todoInput = todoDiv.querySelector('input')
    todoInput.readOnly = false
    todoInput.focus()
    todoDiv.classList.add('edit')
  }

  saveTodo(target) {
    const todoDiv = target.closest('.todo')
    const todoInput = todoDiv.querySelector('input')
    todoInput.readOnly = true
    todoDiv.classList.remove('edit')
    const { id } = todoDiv.dataset
    this.storage.editTodo(id, todoInput.value)
  }

  completeTodo(target) {
    const todoDiv = target.closest('.todo')
    todoDiv.classList.toggle('done')
    const { id } = todoDiv.dataset
    this.storage.editTodo(
      id,
      '',
      todoDiv.classList.contains('done') ? 'DONE' : 'TODO',
    )
  }

  onClickAddBtn() {
    if (this.inputEl.value.trim().length === 0) {
      alert('내용을 입력해주세요.')
      this.inputEl.value = ''
      return
    }
    const id = Date.now()
    this.storage.saveTodo(id, this.inputEl.value.trim())
    this.createTodoElement(id, this.inputEl.value.trim())
  }

  createTodoElement(id, value, status = 'TODO') {
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    if (status === 'DONE') todoDiv.classList.add('done')
    todoDiv.dataset.id = id

    const todoContent = document.createElement('input')
    todoContent.value = value
    todoContent.readOnly = true
    todoContent.classList.add('todo-item')

    const fragment = new DocumentFragment()
    fragment.appendChild(todoContent)

    fragment.appendChild(
      this.createButton('complete-btn', 'complete-btn', ['fas', 'fa-check']),
    )
    fragment.appendChild(
      this.createButton('edit-btn', 'edit-btn', ['fas', 'fa-edit']),
    )
    fragment.appendChild(
      this.createButton('delete-btn', 'delete-btn', ['fas', 'fa-trash']),
    )
    fragment.appendChild(
      this.createButton('save-btn', 'save-btn', ['fas', 'fa-save']),
    )
    todoDiv.appendChild(fragment)
    this.todoListEl.appendChild(todoDiv)
    this.inputEl.value = ''
  }

  createButton(btnId, btnClassName, iconClassName) {
    const btn = document.createElement('button')
    const icon = document.createElement('i')
    icon.classList.add(...iconClassName)
    btn.appendChild(icon)
    btn.id = btnId
    btn.classList.add(btnClassName)
    return btn
  }
}

// document에 DOM이 모두 로드된 다음에 인스턴스 생성
document.addEventListener('DOMContentLoaded', () => {
  const router = new Router()
  const todoList = new TodoList(new Storage())

  const routeCallback = status => () => {
    todoList.filterTodo(status)
    document.querySelector(
      `input[type='radio'][value='${status}']`,
    ).checked = true
  }

  router
    .addRoute('#/all', routeCallback('ALL'))
    .addRoute('#/todo', routeCallback('TODO'))
    .addRoute('#/done', routeCallback('DONE'))
    .setNotFound(routeCallback('ALL'))
    .init()
})
