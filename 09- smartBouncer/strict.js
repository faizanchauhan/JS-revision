// The "Strict" Smart Bouncer (Type Checking & Comparison)

let age = "21";
let hasPass = true;

if (age === 21 && hasPass) {
    console.log("You can enter the club!")
}

// The Micro-Currency Converter (Data Type Conversion)

let input = undefined;
let USD = "100";

let EUR = Number(USD);

let exchange = EUR + USD;

// console.log(`Your total is: ${exchange}`)

let Output = `Enter Your input: ${ input }`;
// console.log(Output);

// console.log(USD)
// console.log(typeof USD)

// console.log(EUR)
// console.log(typeof EUR)

// The "Truthiness" Detector (Boolean Gates)

let userName = "faizan";
let age2 = 22;
let bio = "coding";
let isPremium = true;

let userNameInBool = Boolean(userName);
let age2InBool = Boolean(age2);
let bioInBool = Boolean(bio);
let isPremiumInBool = Boolean(isPremium);

console.log(userNameInBool)
console.log(typeof userNameInBool)
console.log(age2InBool)
console.log(typeof age2InBool)
console.log(bioInBool)
console.log(typeof bioInBool)
console.log(isPremiumInBool)
console.log(typeof isPremiumInBool)

if (userNameInBool && age2InBool && bioInBool && isPremiumInBool === true) {
    console.log("profile is complete!")
}