// for of

let myArray = [2, 4, 6, 8]
for (const eachElement of myArray) {
    // console.log(eachElement)
};

let name = "faizan shabbir"
for (let fullname of name) {
    // console.log(`each letter of name is ${fullname}`)
}

// Map
// Map global object used to store key-value collections.
const map = new Map()
map.set("Pak", "Pakistan")
map.set("USA", "united states of america")
map.set("Esp", "Spain")

for (const [key, value] of map) {
    // console.log(key, ":", value)
};

// for objects: the same dont works

// const skills = {
//     web: "javascript",
//     automation: "n8n"
// }
// for (let [key, value] of skills) {
//     console.log(key, value)
// }


// we use for in loop

let lang = {
    js: "javaScript",
    py: "python",
    cpp: "c plus plus"
}

for (let key in lang) {
    // console.log(`${key} is shortcut for ${lang[key]}`)
}

// for in loop for array

let cities = ["lhr", "isb", "khi", "fsb"]
for (const key in cities) {
    console.log(`${key} and its value ${cities[key]}`)
}

// for in doesnt work for maps