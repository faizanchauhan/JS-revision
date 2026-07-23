// this: current context kou refer krta hai

let user = {
    username: "faizan",
    age: 22,
    greetingMessage: function() {
        // console.log(`${this.username} just logged in`);
        // console.log(this)
    }

}

// user.greetingMessage()
// user.username = "chauhan"
// user.greetingMessage();


// console.log(user["fay"]);

// console.log(this);



//function mein this use nahi hou paa raha idhar
function testingThis() {
    let name = "fay chauhan";
    console.log(this.name);
}
// testingThis()

let identity = function() {
    let name = "fay chauhan";
    console.log(this.name);
};
// identity()


// arrow functions

let userInfo = () => {
    name = "faizann";
    console.log(this) // {}
};
// userInfo()

// explicit return jab aapko return lagana prh raha hou

let addNumbers = (num1, num2) => {
    return num1 + num2
};
// console.log(addNumbers(8, 9))

// implicit return jab aapko return ki zarurat na hou

const addTwo = (num1, num2) => num1 + num2

// or in other way

const addTwo1 = (num1, num2) => (num1 + num2)

console.log(addTwo1(6, 3))


//this is how to take an object in an arrow function

const anObject = () => ({ name: "hahaha" })
console.log(anObject())