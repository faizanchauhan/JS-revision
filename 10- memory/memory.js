// primitive types(stores the copy and changes the copy only)

let myCaste = "chaudhary";

let faizanCaste = myCaste;

faizanCaste = "chauhan";

console.log(myCaste);
console.log(faizanCaste);

// non-primitive types (heap memory stores the reference and changes the original)

let memberOne = {
    name: "faizan",
    rollNo: 20
};

let memberTwo = memberOne;
console.log(memberOne);

memberTwo.rollNo = 18;

console.log(memberOne);
console.log(memberTwo);