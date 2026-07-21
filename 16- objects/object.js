//singleton
Object.create //constructor method

// Object literals

let userLogin = Symbol("uniqueKey")

const userDetails = {
    name: "faizan",
    rollNo: 20,
    isPassed: true,
    location: "Mzd",
    email: "fayzanchouhan@google.com",
    [userLogin]: "uniqueKey", //this is how you access a symbol inside an object
    subjects: ["Pf", "Dsa", "Data Mining"],
    "favrt Sub": "webDev"
}

userDetails.location = "islamabad";
// Object.freeze(userDetails); // cant be changed once freeze
userDetails.location = "lahore";

console.log(userDetails);
// console.log(userDetails.email);
// console.log(userDetails["subjects"]);
// console.log(userDetails["favrt Sub"]); // only way to access these type of key and values
console.log(userDetails[userLogin]);

userDetails.greeting = function() {
    console.log("Hello World")
}

userDetails.greetingTwo = function() {
    console.log(`Hello World, ${this.name}`)
}
console.log(userDetails.greeting())
console.log(userDetails.greetingTwo())