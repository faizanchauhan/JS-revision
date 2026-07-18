let anyDate = new Date();

/* console.log(anyDate);
console.log(anyDate.toString());
console.log(anyDate.toLocaleString());
console.log(anyDate.toLocaleDateString());
console.log(anyDate.toDateString());
console.log(anyDate.toISOString()); */

const dateOfBirth = new Date(2003, 04, 17, 5, 10);
console.log(dateOfBirth.toLocaleString())
console.log(dateOfBirth.toDateString())

// let myDob = new Date("2004-01-24");
let myDob = new Date("01-24-2004");
console.log(myDob.toLocaleString());
console.log(myDob.toDateString());

let timestamp = Date.now()
console.log(timestamp);
console.log(dateOfBirth.getTime());

console.log(Math.floor(Date.now() / 1000))
console.log(myDob.getDate());
console.log(dateOfBirth.getMonth() + 1);

let newDate = new Date()

newDate.toLocaleString("default", {
    weekday: "long"
})
console.log(newDate)