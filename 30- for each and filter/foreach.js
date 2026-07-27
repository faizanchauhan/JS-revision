// for each

let lang = ["ruby", "js", "python", "cpp"];

const value = lang.forEach((val) => {
    // console.log(val)
    return val;
});
// console.log(value)
// for each koi value return nai krta hai


// filter
// Array.prototype.filter() method creates a new array 
// containing only the elements from the original array that pass a specified test function

let RandomNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// let anyNums = RandomNums.filter((nums) => nums > 5)
let anyNums = RandomNums.filter((nums) => {
    return nums > 5
})

console.log(anyNums)