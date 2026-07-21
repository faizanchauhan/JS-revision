let userInfo = ["name", "lastName", "profession"]
    // console.log(userInfo);

const playerStats = ["Babar", 100, true]
    // console.log(playerStats)

const team = new Array("babar", "fakhar", "sufyan", 50, 70, false)
    // console.log(team[0])

///////////////////////////// METHODS ////////////////////////////////

let myArr = []
myArr.push("faizan", "shabbir", "chauhan");
//console.log(myArr)

myArr.pop() //removes last element
    // console.log(myArr)

myArr.unshift("Muhammad"); //adds at the start --> not a good practice if array is large
// console.log(myArr)

myArr.shift(); // removes the first index element
// console.log(myArr)

// console.log(myArr.includes("fatima")) //true or false
// console.log(myArr.indexOf("shabbir")) //position of the string in array

/////////////////////////////////////////////////////////////////////////

const practice = [0, 1, 2, 3, 4, 5, 6, 7, 8]

// console.log(practice.length)
// console.log(practice)
// console.log(typeof practice)

let p2 = practice.join() //converts array to string
    // console.log(p2)
    // console.log(typeof p2)

let arr1 = practice.slice(2, 5)
console.log("A ", practice);
console.log(arr1);

let arr2 = practice.splice(2, 5); //splice manipulates the original array
console.log("B ", practice);
console.log(arr2);

const sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
console.log(sentences.length)