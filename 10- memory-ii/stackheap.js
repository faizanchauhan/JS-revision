// primitive types (stack) 
// (stores the copy and changes the copy only)

let groupMember1 = "rollNo18";

let groupMember2 = groupMember1;

groupMember2 = "rollNo20";

console.log(groupMember1)
console.log(groupMember2)

// Non-primitive types (reference types) (heap) 
// (stores the reference of original and then changes the original)

let partnerOne = {
    rollNo: 18,
    session: 2026
}

let partnerTwo = partnerOne;

console.log(partnerTwo.rollNo)

partnerTwo.rollNo = 20;

console.log(partnerOne.rollNo);
console.log(partnerTwo.rollNo)