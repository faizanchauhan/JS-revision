// A JavaScript Promise is an object representing the eventual completion or failure of an asynchronous operation. 
// It acts as a temporary placeholder for a value that is not yet known when the promise is created.

const promiseOne = new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async Task is Completed')
        resolve()
    }, 1000)
})

promiseOne.then(function() {
    console.log('promise consumed')
})

// instead of doing in 2 parts, let us now do in a single part

new Promise(function(resolve, reject) {
    setTimeout(function() {
        console.log('Async task II')
        resolve()
    }, 1000)
}).then(function() {
    console.log(`promise consumed`)
})

// third promise

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('async task III')
        resolve()
    }, 2000)
}).then(() => {
    console.log(`third promise consumed`)
})

// fourth promise

const forthPromise = new Promise((resolve, reject) => {
    setTimeout(function() {
        resolve({ user: "faizan", age: 22 })
    }, 1000)
})

forthPromise.then((person) => {
    console.log(person)
})