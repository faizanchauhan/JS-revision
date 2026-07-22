// nested Scope and mini hoisting

// nested functions

function one() {

    username = "faizan";

    function two() {

        student = "yes";
        console.log("name: ", username)
    }
    // console.log(student);

    two()
}

one()

// if else conditions

if (true) {
    const name = "fay";
    if (name === "fay") {
        const rollNo = 20;
        console.log(`My name is ${name} and rollNo is ${rollNo}`)
    }
    // console.log(rollNo);
}
// console.log(name)


// two ways to declare a function

console.log(addNumber(12)); //could be accessed

function addNumber(num) {
    return num + 10
}

// also called expressions

addTwoNumbers(); // Cannot access 'addTwoNumbers' before initialization

let addTwoNumbers = function(num) {
    return num + 20
}