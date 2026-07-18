let myDate = new Date();
// console.log(myDate);

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleDateString());

// console.log(typeof myDate)

let specificDate = new Date(2003, 4, 17, 15, 18);
// console.log(specificDate.toLocaleString())

let myCreatedDate = new Date("2004-01-24");
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now();
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime()); //in milliseconds
// console.log(Math.floor(Date.now() / 1000)) //in seconds

let newDate = new Date();
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

newDate.toLocaleString("default", {
    weekday: "long",
})

console.log(newDate)