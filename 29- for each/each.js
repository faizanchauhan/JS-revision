// for each
// forEach() method executes a provided function once for each element in an array.

let programming = ["js", "python", "ruby", "swift"]

programming.forEach(function(lang) {
    // console.log(lang)
});
// callback function doesnt have a name

// arrow function
programming.forEach((vals) => {
    // console.log(vals)
});



function print(yes) {
    console.log(yes)
}
// programming.forEach(print)


programming.forEach((item, index, fullarray) => {
    console.log(item, index, fullarray)
});
//js 0 [ 'js', 'python', 'ruby', 'swift' ]


let arr = [{
        name: "faizan",
        age: 22
    },
    {
        name: 45,
        class: "bscs"
    },
    {
        fun: "cricket",
        time: "1hr"
    }
]

arr.forEach((ite) => {
    console.log(ite.time)
})