//rest operator

function priceOfCartItems(...num1) {
    return num1
}
// console.log(priceOfCartItems(100, 200, 400))



function priceOfCartItemss(val1, val2, ...num1) {
    return num1
}
// console.log(priceOfCartItemss(100, 200, 400, 30, 500))

//Objects in functions

let user = {
    name: "faizan",
    age: 20
}

function handleObj(anyObject) {
    return anyObject.name
}
// console.log(handleObj(user))


function handleObject(anyObject) {
    console.log(`my name is ${anyObject.name} and my age is ${anyObject.age}`)
}
// handleObject(user)
handleObject({
    name: "fay",
    age: 22
})


// Arrays in functions
let anArray = [29, 39, 49, 59]

function handleArray(anyArray) {
    return anyArray[2]
}
// console.log(handleArray(anArray))
console.log(handleArray([3, 4, 5, 6, 6]))