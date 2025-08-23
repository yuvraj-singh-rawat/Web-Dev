// Requires is in commonJS
const greet = require("./app") // for inline module export app.js

// const formula = require("./formula");
const { add, sub } = require('./formula')

// normal way
// console.log(formula.sub(1, 3));

// using destructure
console.log("The Sum is: ", add(12, 13));
console.log("The Sub is: ", sub(12, 13));
greet();








// Importing using ES6 Module import feature
// import {sum, subtract} from './newEJS';

// console.log(sum(1,4));
// console.log(subtract(9, 5));