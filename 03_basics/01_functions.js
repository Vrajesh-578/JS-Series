function sayMyName(){
    console.log("V");
    console.log("R");
    console.log("A");
    console.log("J");
    console.log("E");
    console.log("S");
    console.log("H");
}

// sayMyName()

// function addTwoNumbers(number1, number2){
//   console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 4)
// console.log("Result:", result);


function loginUserMessage(username = "Vajju"){
    if(!username){
        console.log("please enter username");
        return
    }
    return `${username} just logged in`
}
// console.log(loginUserMessage("Vrajesh"))
console.log(loginUserMessage())