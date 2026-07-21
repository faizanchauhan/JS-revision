const marvelHeroes = ['spiderman', 'thor', 'ironman']
const DcHeroes = ['batman', 'flash', 'superman']

// marvelHeroes.push(DcHeroes)
// console.log(marvelHeroes)
// console.log(marvelHeroes[3][2])

// const allHeroes = marvelHeroes.concat(DcHeroes) //concat combines two or more arrays. returns a new array
// console.log(allHeroes)

//const allRealHeroes = [...marvelHeroes, ...DcHeroes] //spread operator spreads all the elements
// console.log(allRealHeroes)

let ArrayIntoArray = [1, 2, 3, [4, 5, 6], 7, 8, [6, 7, [4, 5, 6]]];
// const realArray = ArrayIntoArray.flat(Infinity)
// console.log(realArray);

console.log(Array.isArray("faizan")); //false --> asking
console.log(Array.from("faizan")); //converts to array
console.log(Array.from({ name: "faizan" })); //interesting scenario

let rollno = 18;
const rollno2 = 20;
const rollno3 = 53;

console.log(Array.of(rollno, rollno2, rollno3))