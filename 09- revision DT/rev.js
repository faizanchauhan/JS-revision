// Primitive Data types

// strings, numbers, booleans, null, undefined, symbol, bigInt



let shoes = "chelsea leather boots"; //string

const price = 6615.99; //number

let isBought = true; //boolean

let color = null; //null

let size = undefined; //undefined

let id = Symbol("Lama"); //symbol

// console.log(typeof price);
// console.log(typeof isBought);
// console.log(typeof color);
// console.log(typeof size);
// console.log(typeof id);



// reference types(non-primitive data types)

// arrays, objects, functions

let lamaHaul = ["boots", "shirt", "pants"]; //array

let UserInfo = {
    name: "faizan",
    age: 22,
    isAdmin: true
}

function hasInterestsIn(sports) {
    return sports.includes("football");
}

console.log(lamaHaul);
console.log(typeof lamaHaul);

console.log(UserInfo);
console.log(typeof UserInfo);

console.log(hasInterestsIn(["football", "basketball"]));
console.log(typeof hasInterestsIn);

// primitive data types are immutable, while reference types are mutable

// primitive data types are stored in stack memory, while reference types are stored in heap memory

// primitive data types are passed by value, while reference types are passed by reference