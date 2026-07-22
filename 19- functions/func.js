// function funcName(parameters) {
//     scope / defintion of the function
// }

function myNameIs(name) {
    console.log("f")
    console.log("a")
    console.log("i")
    console.log("z")
    console.log("a")
    console.log("n")
}

// myNameIs() // function call

function addTwoNums(number1, number2) {
    console.log(number1 + number2)
}

// const result = addTwoNums(2, 4)
// console.log("Result: ", result);


function AddingNumbers(num1, num2) {
    // let res = num1 + num2
    // return res;

    return num1 + num2;

    console.log("fay") // unreachable code 
}
// let result = AddingNumbers(7, 9)
// console.log(`Result: ${result}`)

function loginUserMessage(username = "fay") {
    if (!username) {
        console.log("please enter a username")
        return
    } else {
        console.log(username, "why are you here?")
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("fay"))
console.log(loginUserMessage("faizan"))