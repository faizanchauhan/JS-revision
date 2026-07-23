let user = "0";
if (user) {
    console.log("user logged in");
} else {
    console.log("user not logged in");
};

// falsy values
// false, 0, -0, BigInt 0n, "", null, undefined, Nan

// truthy values
// {}, [], "false", '0', " ", function(){},

let name = [];
if (name.length === 0) {
    console.log("Array is empty")
}

let emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    console.log(`object is empty`)
}

// nullish coalescing operator ?? : null & undefined k liye bana hai

let score;
// score = 50 ?? 80;    // 50
// score = null ?? 10    // 10
// score = undefined ??   // 100
// score = null ?? 30 ?? 50  //50
// console.log(score)


// ternary operator
// condition ? true : false
// true hai tou first condition execute hou therwise second condition (false condition)

const teaPrice = 80;
teaPrice <= 80 ? console.log("less than 80") : console.log(`more than 80`);