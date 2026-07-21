let stdInfo = new Object(); // constructor method
// console.log(stdInfo);

let stdInfo2 = {};
stdInfo2.name = "ali";
stdInfo2.age = 22;
// console.log(stdInfo2);

let student = {
    id: 20,
    username: {
        fullUsername: {
            firstname: "faizan",
            lastname: "shabbir"
        }
    }
};

// console.log(student.username.fullUsername.lastname)

let obj1 = { 0: "a", 1: "b" };
let obj2 = { 2: "a", 3: "b" };
let obj3 = { 4: "a", 5: "b" };

// const obj5 = Object.assign({}, obj1, obj2, obj3);
// console.log(obj5);

let obj4 = {...obj1,
    ...obj2,
    ...obj3
};
console.log(obj4);

let user = [
    { name: "ali", age: 20 },
    { name: "umer", age: 20 },
    { name: "abubakar", age: 20 },
    { name: "usman", age: 20 },
]
console.log(user[3].name);

console.log(stdInfo2);
console.log(Object.keys(stdInfo2));
console.log(Object.values(stdInfo2));
console.log(Object.entries(stdInfo2));

console.log(stdInfo2.hasOwnProperty("name")) //asking whether present or not? true or false