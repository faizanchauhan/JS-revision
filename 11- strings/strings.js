name = "faizan";
rollNo = 20;

// console.log(name + " " + rollNo + " BSCS")

//use this method for addition
// console.log(`i am ${name} and my rollNo is ${rollNo}. I am from ${"BSCS"}.`)

//another way for string declaration
const cast = new String("fsc chauhan");
console.log(cast)

console.log(cast[2]); //access key value pair

console.log(cast.length) //total length
console.log(cast.toUpperCase()) // converts all small letters to Capital letters
console.log(cast.charAt(2)) // access the character at that position
console.log(cast.indexOf("a")) //index/position of any word

console.log(cast.substring(0, 3)) //access parts of string
console.log(cast.slice(-10, 3)) //access parts of string

let myFyp = "     Finance   With Foresight"
console.log(myFyp.trim()); //removes spaces from start and end

console.log(myFyp.replace("     Finance   With Foresight", "FIFA"));

console.log(myFyp.includes("FIFA")) // whether this word includes in string or not? true or false

console.log(myFyp.split("F")) // splits string into words based on F