try {
  throw new exception('fake exception');
} catch (err) {
  var test = 'Can you access me?';

  console.log(err instanceof ReferenceError === true); // true
}

console.log(test === 'Can you access me?'); // true
console.log(typeof err === 'undefined'); // true