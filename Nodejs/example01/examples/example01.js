

function functionA() {
  setTimeout(()=> {
    console.log('callback A')
  }, 0)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
  console.log(1)
}

function functionB() {
  setTimeout(()=> {
    console.log('callback B')
  }, 0)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
  console.log(2)
}

functionA()
functionB()