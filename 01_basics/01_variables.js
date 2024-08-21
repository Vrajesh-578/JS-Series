const accountId = 144553
let accountEmail = "Vrajesh@google.com"
var accountPassword = "12345"
accountCity = "Surat"
let accountState;

// accountId = 2 // not allowed

accountEmail = "vajju@mail.com"
accountPassword = "67890"
accountCity = "Ahmedabad"

console.log("accountId");

/*
    Prefer not to use var
    because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);