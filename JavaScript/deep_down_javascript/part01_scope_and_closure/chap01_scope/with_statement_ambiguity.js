function doSomething(value, obj) {
  with (obj) {
    console.log(value);
    value = 'which scope is this?';
  }
}