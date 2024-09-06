// Immediately Invoked Function Expressions (IIFE)

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // to end the code, semicolon is required

( (name) => {
    console.log(`DB CONNECTED Two ${name}`);
} )('Vrajesh')