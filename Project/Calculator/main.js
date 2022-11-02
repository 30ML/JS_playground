let left = null
let right = null
let operator = null

function save() {
  const input = document.getElementById('top-input')
  let value = ''

  if (left === null) return
  value += left + ' '
  input.value = value

  if (operator === null) return
  value += operator + ' '
  input.value = value

  if (right === null) return
  value += right + ' '
  input.value = value

  if (res) {
    let res = ''
    switch(operator) {
      case '+':
        res = parseInt(left) + parseInt(right)
        break
      case '-':
        res = parseInt(left) - parseInt(right)
        break
      case '*':
        res = parseInt(left) * parseInt(right)
        break
      case '/':
        res = parseInt(left) / parseInt(right)
        break
    }
    value += `= ${res}`
    input.value = value
  }
}

function inputNum(num) {
  if (operator === null) {
    if (left === null) {
      left = num.toString()
    } else {
      if (num === 0 && parseInt(left) === 0) return
      left += num.toString()
    }
  } else {
    if (right === null) {
      right = num.toString()
    } else {
      if (num === 0 && parseInt(right) === 0) return
      right += num.toString()
    }
  }
  save()
}

