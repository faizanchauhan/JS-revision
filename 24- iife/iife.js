// immediately invoked function expression

// to preventfrom the pollution of global scope and immediately execute them

// named iife

(function user() {
    console.log(`DB connected`)
})();


//unnamed iife

((name) => {
    console.log(`Db connected for the second time for ${name}`)
})("faizan")