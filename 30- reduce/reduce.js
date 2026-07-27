let number = [1, 2, 3]

const result = number.reduce(function(accumulator, currentValue) {
    console.log(`acc is: ${accumulator} and current value is ${currentValue}`)
    return accumulator + currentValue;
}, 0)
console.log(result);


// OR by arrow function and implicit scope
const addition = number.reduce((acc, currVal) => acc + currVal, 0)
console.log(addition)



let array = [{
        lang: 07,
        source: "yt"
    },
    {
        lang: 10,
        source: "udemy"
    },
    {
        lang: 13,
        source: "coursera"
    },
]

const avg = array.reduce((acc, curr) => acc + curr.lang, 0)
console.log(avg)