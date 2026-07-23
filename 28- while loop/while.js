// while loop
// while loop repeats a block of code as long as a specified condition evaluates to true

let index = 0;
while (index <= 10) {
    // console.log(`the index is ${index}`);
    index = index + 2
}


// array

let marks = [20, 40, 60];
let first = 0;
while (first < marks.length) {
    // console.log(`here is an array ${marks[first]}`);
    first = first + 1;
}

// do while
// The do...while statement in JavaScript creates a loop that executes a block of code at least once
// before checking if a specified condition is true

let score = 88;
do {
    console.log(`the score is ${score}`)
    score = score + 1
} while (score <= 10)