let randomNumbers = [1, 2, 3, 4, 5, 6]

let user = new Array("name", "address", "postal code")
    // console.log(user)

const timeOfTheDay = ["afternoon", 12, true, "sunTop"];
// console.log(timeOfTheDay[3])
// console.log(typeof timeOfTheDay) //object


randomNumbers.push(7, 8);
randomNumbers.push(9);
randomNumbers.pop();
randomNumbers.unshift(101);
randomNumbers.shift();
// console.log(randomNumbers);
// console.log(randomNumbers.includes(4)); // true or false
// console.log(randomNumbers.indexOf(6)); // position of string.

// let intoString = randomNumbers.join(); //now the array is a string
// console.log(intoString)
// console.log(typeof intoString) // string

// slice, splice
console.log("A ", randomNumbers);

let Arr1 = randomNumbers.slice(2, 6); // [ 3, 4, 5, 6 ]
console.log(Arr1);
console.log("B ", randomNumbers);

let Arr2 = randomNumbers.splice(3, 3); // splice manipulates the original array and also includes the range
console.log(Arr2);
console.log("C ", randomNumbers);