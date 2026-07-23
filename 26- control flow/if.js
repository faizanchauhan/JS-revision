// comparison operator
// >, <, >=, <=, ==, !=, ===, !==

let isPassed = false;
let temp = 36;
if (temp === 36) {
    // console.log(`Inside the block scope`)
} else {
    console.log(`Inside the else block scope`)
};

// console.log(`outside the block scope`)


// scope related
totalUser = 60;

if (totalUser > 50) {
    let studentsPaying = 46;
    // console.log(`the number of students paying are ${studentsPaying}`)
};
// console.log(`Outside scope ${studentsPaying}`)


// implicit scope: maan liya k yeh scope hai
let coursePrice = 399;
// if (coursePrice > 55) console.log(`Your total price is: ${totalUser}`);

// nested conditions check

let price = 60;
if (price < 30) {
    console.log("less than 30")
} else if (price < 40) {
    console.log("less than 40")
} else if (price < 50) {
    console.log("less than 50")
} else {
    // console.log(`it will be less than 100 then`)
};


// all the conditions must be true
let lightOn = true;
let buttonOn = true;
const dimmerOn = true;

if (lightOn && buttonOn && dimmerOn) {
    // console.log(`The fan is running now`)
};

// atleast one condition must be true
let loggedInUsingGoogle = true;
const loggedInUsingEmail = false;

if (loggedInUsingGoogle || loggedInUsingEmail) {
    console.log(`the user is logged in`)
}