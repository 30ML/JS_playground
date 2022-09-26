with ({ inScope: "You can't see me." }) {
  var notInScope = 'but you can see me.';
  console.log(inScope === "You can't see me."); // true
}

console.log(typeof inScope === 'undefined'); // true
console.log(notInScope === 'but you can see me.'); // true