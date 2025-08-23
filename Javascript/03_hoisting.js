// Hoisting

//  *********** Example with var ***************

var a; // internally a is declared if without defining var a
console.log(a); // undefined
var a = 12;
console.log(a); // 12

//  ********** Example with let and const ************

// console.log(b); // ❌ ReferenceError: Cannot access 'b' before initialization
let b = 20;

/* 
Variables declared with let and const are also hoisted but placed in a special zone called the Temporal Dead Zone (TDZ) from the start of the block until their declaration is processed.
You can’t access them before the declaration.
*/


// **************** With Functions ******************

greet(); // works

function greet() {
    console.log("Hello Sir");
};


// *************** function as a variable **************

// hello(); // TypeError

var hello = function sayHi() {
    console.log("Hello Dude!");
};