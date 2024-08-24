const name = "Vrajesh"
const repoCount = 30

// console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName =  new String('vrajesh-dp-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('j'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "   vrajesh   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://vrajesh.com/vrajesh%20patoliya"
console.log(url.replace('%20', '-'));
console.log(url.includes('vrajesh'));
console.log(url.includes('Vajju'));
console.log(gameName.split('-'));