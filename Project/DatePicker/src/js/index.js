class DatePicker {
  monthData = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ]

  #calendarDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  }

  selectedDate = {
    data: '',
    date: 0,
    month: 0,
    year: 0,
  }

  datePickerEl
  dateInputEl
  calendarEl
  calendarMonthEl
  monthContentEl
  nextBtnEl
  prevBtnEl
  calendarDatesEl

  constructor() {
    this.initCalendarDate()
    this.assignElement()
    this.initSelectedData()
    this.setDateInput()
    this.addEvent()
  }

  assignElement() {
    this.datePickerEl = document.getElementById('date-picker')
    this.dateInputEl = this.datePickerEl.querySelector('#date-input')
    this.calendarEl = this.datePickerEl.querySelector('#calendar')
    this.calendarMonthEl = this.calendarEl.querySelector('#month')
    this.monthContentEl = this.calendarMonthEl.querySelector('#content')
    this.nextBtnEl = this.calendarMonthEl.querySelector('#next')
    this.prevBtnEl = this.calendarEl.querySelector('#prev')
    this.calendarDatesEl = this.calendarEl.querySelector('#dates')
  }

  initCalendarDate() {
    const data = new Date()
    const date = data.getDate()
    const month = data.getMonth()
    const year = data.getFullYear()
    this.#calendarDate = {
      data,
      date,
      month,
      year,
    }
  }

  initSelectedData() {
    this.selectedDate = { ...this.#calendarDate }
  }

  setDateInput() {
    this.dateInputEl.textContent = this.formatDate(this.selectedDate.data)
    this.dateInputEl.dataset.value = this.selectedDate.data
  }

  addEvent() {
    this.dateInputEl.addEventListener('click', this.toggleCalendar.bind(this))
    this.nextBtnEl.addEventListener('click', this.moveToNextMonth.bind(this))
    this.prevBtnEl.addEventListener('click', this.moveToPrevMonth.bind(this))
    this.calendarDatesEl.addEventListener(
      'click',
      this.onClickSelectDate.bind(this),
    )
  }

  moveToNextMonth() {
    this.#calendarDate.month += 1
    if (this.#calendarDate.month > 11) {
      this.#calendarDate.month = 0
      this.#calendarDate.year += 1
    }
    this.updateMonth()
    this.updateDates()
  }

  moveToPrevMonth() {
    this.#calendarDate.month -= 1
    if (this.#calendarDate.month < 0) {
      this.#calendarDate.month = 11
      this.#calendarDate.year -= 1
    }
    this.updateMonth()
    this.updateDates()
  }

  onClickSelectDate(event) {
    if (event.target.dataset.date) {
      this.calendarDatesEl
        .querySelector('.selected')
        ?.classList.remove('selected')
      event.target.classList.add('selected')
      this.selectedDate = {
        data: new Date(
          this.#calendarDate.year,
          this.#calendarDate.month,
          event.target.dataset.date,
        ),
        year: this.#calendarDate.year,
        month: this.#calendarDate.month,
        date: event.target.dataset.date,
      }
      this.setDateInput()
      this.calendarEl.classList.remove('active')
    }
  }

  formatDate(dateData) {
    let date = dateData.getDate()
    date = date < 10 ? `0${date}` : date
    let month = dateData.getMonth() + 1
    month = month < 10 ? `0${month}` : month
    const year = dateData.getFullYear()
    return `${year}/${month}/${date}`
  }

  toggleCalendar() {
    if (this.calendarEl.classList.contains('active')) {
      this.#calendarDate = { ...this.selectedDate }
    }
    this.calendarEl.classList.toggle('active')
    this.updateMonth()
    this.updateDates()
  }

  updateMonth() {
    this.monthContentEl.textContent = `${this.#calendarDate.year} ${
      this.monthData[this.#calendarDate.month]
    }`
  }

  updateDates() {
    this.calendarDatesEl.innerHTML = ''
    const { year, month } = this.#calendarDate
    const numberOfDates = new Date(year, month + 1, 0).getDate()
    const fragment = new DocumentFragment()
    for (let i = 0; i < numberOfDates; i++) {
      const dateEl = document.createElement('div')
      dateEl.classList.add('date')
      dateEl.textContent = i + 1
      dateEl.dataset.date = i + 1
      fragment.appendChild(dateEl)
    }
    fragment.firstChild.style.gridColumnStart =
      new Date(year, month, 1).getDay() + 1
    this.calendarDatesEl.appendChild(fragment)
    this.colorSaturday()
    this.colorSunday()
    this.markToday()
    this.markSelectedDate()
  }

  colorSaturday() {
    const { year, month } = this.#calendarDate
    const saturdayEls = this.calendarDatesEl.querySelectorAll(
      `.date:nth-child(7n+${7 - new Date(year, month, 1).getDay()})`,
    )
    for (let i = 0; i < saturdayEls.length; i++) {
      saturdayEls[i].style.color = 'blue'
    }
  }

  colorSunday() {
    const { year, month } = this.#calendarDate
    const sundayEls = this.calendarDatesEl.querySelectorAll(
      `.date:nth-child(7n+${8 - (new Date(year, month, 1).getDay() % 7)})`,
    )
    for (let i = 0; i < sundayEls.length; i++) {
      sundayEls[i].style.color = 'red'
    }
  }

  markToday() {
    const currentDate = new Date()
    const currentYear = currentDate.getFullYear()
    const currentMonth = currentDate.getMonth()
    const today = currentDate.getDate()
    if (
      currentYear === this.#calendarDate.year &&
      currentMonth === this.#calendarDate.month
    ) {
      this.calendarDatesEl
        .querySelector(`[data-date="${today}"]`)
        .classList.add('today')
    }
  }

  markSelectedDate() {
    if (
      this.selectedDate.year === this.#calendarDate.year &&
      this.selectedDate.month === this.#calendarDate.month
    ) {
      this.calendarDatesEl
        .querySelector(`[data-date="${this.selectedDate.date}"]`)
        ?.classList.add('selected')
    }
  }
}

new DatePicker()
