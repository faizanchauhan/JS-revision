// global scope: can be accessed anywhere
// Global scope is the outermost scope in a JavaScript program. 
// Variables declared in the global scope are accessible from anywhere in your code,
// including within functions and blocks.

var playerThreeScore = 350;

let playerOneScore = 140;

{
    //block scope: whatever is inside cannot be accessed outside the block scope
    //Block scope is a concept introduced with the let and const keywords in ES6.
    //A block is any code section within curly braces, {},
    //such as in if statements, for loops, or while loops.
    let playerOneScore = 100;
    const playerTwoScore = 200;
    var playerThreeScore = 300;

    console.log(`Block scope: ${playerOneScore}`)
    console.log(playerThreeScore)
}

console.log("Global Scope: ", playerOneScore);
// console.log(playerTwoScore);
console.log(playerThreeScore);

//Local scope refers to variables that are only accessible within a function.