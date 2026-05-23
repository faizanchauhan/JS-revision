let name = "faizan";

const rollNo = 18;

const isStudent = true;

let number = 10100101010101010843579348573485083484375834759341101010111;

let caste;

let money = null;

const mySymbol = Symbol("mySymbol");

let objecttt = {
    name: "faizan",
    rollno: 20
}

console.log(mySymbol, typeof mySymbol);
console.log(name, typeof name);
console.log(rollNo, typeof rollNo);
console.log(isStudent, typeof isStudent);
console.log(number, typeof number);
console.log(caste, typeof caste);
console.log(money, typeof money);
console.log(objecttt, typeof objecttt);

console.table([name, rollNo, isStudent, number, caste, money, mySymbol, objecttt]);


const mySymbol2 = Symbol("her")

const faizan = {
    city: 'mzd',
    state: 'ajk'

}

console.log(faizan, typeof faizan);