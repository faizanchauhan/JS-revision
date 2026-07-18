let name = "faizan";
const rollno = 20;
// console.log(name + " " + rollno + " BSCS");
// console.log(`i am ${name} my rollno is ${rollno} and i am a ${"BSCS student"}`)

const anotherRollno = new String(18);
// console.log(anotherRollno);
// console.log(typeof anotherRollno);

let subject = "Social Network Analysis";
// console.log(subject[4]); //a
let upperCase = subject.toUpperCase();
// console.log(upperCase);

console.log(subject.charAt(7)); //N
console.log(subject.indexOf("A")); //15
console.log(subject.length) //23

let testString = subject.substring(0, 6);
console.log(testString); // "Social"

let newString = subject.slice(6, 15);
console.log(newString); // " Network"

let anotherString = subject.split("a")
console.log(anotherString) // [ 'Soci', 'l Network An', 'lysis' ]

console.log(subject.includes("Social"))

const areYouIn = new String("    I will    never be    ");
console.log(areYouIn); // [String: '    I will    never be    ']
console.log(areYouIn.trim()); // I will    never be

console.log(areYouIn.replace("never", "forever")) //     I will    forever be 

let bestDay = new String("13th march")
console.log(bestDay.bold());
console.log(bestDay.big());
console.log(bestDay.blink());
console.log(bestDay.italics());