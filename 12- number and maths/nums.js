let score = 27;
console.log(score)

const balance = new Number(10000.7890);
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2)); // 10000.79 --> fixes the length of digits after decimal 


const id = 55.867
console.log(id.toPrecision(3)) // 55.9

const hundred = 1000000;
console.log(hundred.toLocaleString('en-IN'))