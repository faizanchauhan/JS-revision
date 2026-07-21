let marvelHeros = ["spiderman", "thor", "ironman"];
let DcHeros = ["batman", "flash", "superman"];

// marvelHeros.push(DcHeros);
// console.log(marvelHeros[3][2])

// let AllHeros = marvelHeros.concat(DcHeros)
// console.log(AllHeros)

// let allNewHeros = [...marvelHeros, ...DcHeros] //spread operator
// console.log(allNewHeros)

const anotherArr = [1, 2, 3, 4, [5, 6, 6], 7, 8, [9, 8, 7, [2, 4, 5, 6]]];
const originalArr = anotherArr.flat(Infinity);
console.log(originalArr);

console.log(Array.isArray("chauhan"));
console.log(Array.from("chauhan"));

let marks1 = 100;
let marks2 = 200;
let marks3 = 300;

console.log(Array.of(marks1, marks2, marks3)) //now an array