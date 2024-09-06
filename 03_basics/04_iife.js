// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // to end the code, semicolon is required

( (name) => {
    // unnamed IIFE
    console.log(`DB CONNECTED Two ${name}`);
} )('Vrajesh')