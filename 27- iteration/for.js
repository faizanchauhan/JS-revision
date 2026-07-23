// for loop

for (let i = 0; i <= 10; i++) {
    let element = i;
    if (i === 5) {
        // console.log(`this is the fifth digit`);
    }
    // console.log(element);
};


for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop: ${i}`);
    for (j = 1; j <= 10; j++) {
        // console.log(`inner loop is ${j} and outer loop is ${i}`);
        // console.log(i + " * " + j + " = " + i * j)
    }
};


// array
let superHeros = ["batman", "ironman", "hulk", "dr strange"]
    // console.log(superHeros.length)

for (let i = 0; i < superHeros.length; i++) {
    const element = superHeros[i];
    // console.log(element)
}


// break and continue

// In JavaScript, break exits a loop entirely, while
// continue skips the current iteration and jumps to the next cycle.
// Both keywords work inside for, while, and do...while loops

for (let i = 1; i <= 8; i++) {
    if (i == 5) {
        console.log(`we are skipping ${i}`)
        continue;
    }
    console.log(`the output numbers are ${i}`)
}