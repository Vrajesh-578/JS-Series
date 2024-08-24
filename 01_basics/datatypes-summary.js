// Primitive
// 7 types : String, Number, Boolean, null, Undefined, Symbol, BigInt
const score = 100
const scoreValue = 100.5

const IsLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// const bigNumber = 5735732547857869n



// Reference (Non Primitive)
// Array, Objects, Functions
const heros = ["shaktiman", "naagraj","doga"]
let myObj = {
    name: "Vrajesh",
    age:20,
}

let myFunction = function(){
    console.log("Hello World");
}

console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3  // for read more


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// Stack  (Primitive), Heap (Non-Primitive)

let myYoutubename = "VrajeshPatoliyadotcom"

let anothername = myYoutubename
anothername = "Codewithvajju"

console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email:"user@gmail.com",
    upi:"user@ybl"
}

let userTwo = userOne

userTwo.email = "Vrajesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);