// if
// const isUserLoggedIn = true
// const tempreture = 41

// if(tempreture < 50){
//   console.log("less than 50");    
// } else
// {
// console.log("tempreture is greater than 50");
// }

// console.log("Execute");
// <, >, <=, >=, ==, !=, ===, !==

// const score = 200

// if (score > 100){
//    const power = "fly" 
//    console.log(`user power: ${power}`);
// }

// console.log(`user power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"),console.log("tets2");  // do not write like this (don't be over smart)

// if(balance < 500){
//     console.log("less than 500");
// } else if (balance < 750){
//     console.log("less than 750"); 
// } else if (balance < 900){
//     console.log("less than 900"); 
// } else{
//     console.log("less than 1200");  
// }

const isUserLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(isUserLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in");   
}