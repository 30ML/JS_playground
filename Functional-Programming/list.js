//var percentValue = 5
//var calculateTax = (value) => { return value/100 * (100 + percentValue) }

var calculateTax = (value, percentValue) => value / 100 *  (100 + percentValue)

console.log(calculateTax(5, 5))