function sum(base) {
  var inClosure = base;
  return function (adder) {
    return inClosure + adder;
  };
};
var fiveAdder = sum(5);
fiveAdder(3);
var threeAdder = sum(3);