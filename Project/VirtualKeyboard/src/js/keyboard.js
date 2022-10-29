export class Keyboard {
  #switchEl
  #fontSelectEl
  #containerEl
  #keyboardEl
  #inputGroupEl
  #inputEl
  #keyPress = false
  #mouseDown = false

  constructor() {
    this.#assignElement()
    this.#addEvent()
  }

  #assignElement() {
    this.#containerEl = document.getElementById('container')
    //this.#switchEl = document.getElementById("switch");
    this.#switchEl = this.#containerEl.querySelector('#switch')
    this.#fontSelectEl = this.#containerEl.querySelector('#font')
    this.#keyboardEl = this.#containerEl.querySelector('#keyboard')
    this.#inputGroupEl = this.#containerEl.querySelector('#input-group')
    this.#inputEl = this.#inputGroupEl.querySelector('#input')
  }

  #addEvent() {
    //this.#switchEl.addEventListener("change", (event) => {
    //  const isDarkMode = event.target.checked;
    //  document.documentElement.setAttribute(
    //    "theme",
    //    isDarkMode ? "dark-mode" : ""
    //  );
    //});
    this.#switchEl.addEventListener('change', this.#onChangeTheme)
    this.#fontSelectEl.addEventListener('change', this.#onChangeFont)
    document.addEventListener('keydown', this.#onKeyDown.bind(this))
    document.addEventListener('keyup', this.#onKeyUp.bind(this))
    this.#inputEl.addEventListener('input', this.#input)
    this.#keyboardEl.addEventListener('mousedown', this.#onMouseDown.bind(this))
    document.addEventListener('mouseup', this.#onMouseUp.bind(this))
  }

  #onChangeTheme(event) {
    const isDarkMode = event.target.checked
    document.documentElement.setAttribute(
      'theme',
      isDarkMode ? 'dark-mode' : ''
    )
  }
  #onChangeFont(event) {
    const fontFamily = event.target.value
    document.body.style.fontFamily = fontFamily
  }
  #onKeyDown(event) {
    if (this.#mouseDown) return
    this.#keyPress = true
    const isKorean = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(event.key)
    this.#inputGroupEl.classList.toggle('error', isKorean)
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.add('active')
  }
  #onKeyUp(event) {
    if (this.#mouseDown) return
    this.#keyPress = false
    this.#keyboardEl
      .querySelector(`[data-code=${event.code}]`)
      ?.classList.remove('active')
  }
  #input(event) {
    event.target.value = event.target.value.replace(/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/, '')
  }
  #onMouseDown(event) {
    if (this.#keyPress) return
    this.#mouseDown = true
    event.target.closest('div.key')?.classList.add('active')
  }
  #onMouseUp(event) {
    if (this.#keyPress) return
    this.#mouseDown = false
    const keyEl = event.target.closest('div.key')
    const isActive = !!keyEl?.classList.contains('active')
    const keyValue = keyEl?.dataset.val // data-val="1" > dataset.val
    if (
      isActive &&
      !!keyValue &&
      keyValue !== 'Space' &&
      keyValue !== 'Backspace'
    ) {
      this.#inputEl.value += keyValue
    }
    if (isActive && keyValue === 'Space') {
      this.#inputEl.value += ' '
    }
    if (isActive && keyValue === 'Backspace') {
      this.#inputEl.value = this.#inputEl.value.slice(0, -1)
    }
    this.#keyboardEl.querySelector('.active')?.classList.remove('active')
  }
}
