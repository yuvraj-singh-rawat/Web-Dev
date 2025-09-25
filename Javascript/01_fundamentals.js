// Data Types

// 1. Primitive Data Type

// 1. Number - integers, decimals, positive, negative, special values like NaN and Infinity

let numm1 = 12;
let num2 = 2.5;
let num3 = -12;

console.log(1 / 10); // infinity
console.log(-1 / 10); // - infinity
console.log("abc" / 2); // NaN (Not a Number)

// 2. Bigint - numbers larger than Number’s safe limit (9007199254740991)

console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let bigNum = 12345678910111213141516n; // BigInt
console.log(bigNum);

// console.log(5n + 5); // error

// 3. String - Sequence of characters enclosed in "", '', or `` (template literals)

let strr1 = "Hello"; // double quotes
let strr2 = 'Hello'; // single quotes
let strr3 = `Hello`; // template literals

// allow us to embedding expressions 
let name = "Yuvraj";
console.log(`Hello + ${name}`); // Hello Yuvraj

// String is Immutable
let strrr = "Yuvraj";
strrr[0] = "J";
console.log(strrr); // Yuvraj

// 4. Symbol - Unique, immutable identifiers

let id = Symbol("description");
console.log(typeof id); // symbol

// each symbol is unique
let sym1 = Symbol("id");
let sym2 = Symbol("id");

console.log(sym1 === sym2); // false

// Use case: To create unique property keys in objects, avoiding accidental overwrites.

let obj = {};
let symKey = Symbol("key");

obj[symKey] = "value";
console.log(obj[symKey]); // value

// 5. Boolean - true/false

let isActive = true;
let isDead = false;

// 6. null - intentional absence of value

let d = null;

// 7. undefined - variable declared but not assigned gets undefined automatically

let a;
console.log(a); // undefined

let q = undefined;

// You can replace the whole value, not mutate it.





// 2. Non Primitive Data Type

// - Stored in Heap Memory
// - Copied by reference, not by value
// - Mutable

let obb = { name: "Yuvraj" };
let obb1 = obb;
obb1.name = "Singh";
console.log(obb1.name); // Singh

// 1. Object - An object is a collection of key-value pairs (unordered).

let person = {
    name: "Yuvraj",
    age: 23,
    greet: function () {
        console.log("Hi!");
    }
};

// Accessing
console.log(person.name); // Yuvraj
console.log(person["age"]); // 23

// Adding
person.city = "Ajmer";
console.log(person.city); // Ajmer

// TypeOf
console.log(typeof person); // Object


// 2. Array - Special type of object used to store ordered lists.

let arr = [10, 11, 12, 13, 14];

console.log(arr[0]); // 10
console.log(Array.isArray(arr)); // true

// 3. Functions - functions are first-class objects — they can be stored in variables, passed as arguments, and returned.

function greet(name) {
    return name;
};

const greet = function (name) {
    return name;
};

const greeet = (name) => {
    return name;
};

// 4. Special Type 

// 4.1 Date
let now = new Date();
console.log(now.toDateString());

// 4.2 RegExp
let person = /hello/i;
console.log(pattern.test("Hello World")); // true

// 4.3 Map
let mpp = new Map();
mpp.set("name", "yuvraj");
mpp.set({}, "objectKey");

// 4.4 Set
let set = new Set([1, 2, 3, 4, 5]);
console.log(set); // Set(3) {1,2,3}


// Type Conversion/Coercion

// 1. Implicit Conversion

let result = '5' + 3; // String + Number = String
console.log(result); // 53

let res = 5 + true; // Number + Boolean = Number
console.log(res); // 5 + 1 = 6

// true - 1
// false - 0

let und = 5 + undefined; // Number + Undefined = NaN
console.log(und); // NaN

let xsd = 5 + null; // null converted to 0
console.log(xsd); // 5

let zsa = true + "Yuvraj"; // Boolean + String = String
console.log(zsa); // trueYuvraj

let pa = "5" * 2; // String * Number = Number
console.log(pa); // 10

let resl = '5' - 3; // Subtracting a String and Number
console.log(resl); // 2



// 2. Explicit / Manual Conversion 

// Number to String Conversion -> String() or .toString()
let num = 123; // 123
let str = String(num); // '123'
let str2 = num.toString(); // '123'

// String to Number Conversion -> Number(), parseInt(), or parseFloat()
let str1 = '123'; // 123
let str3 = "10" / "2"; // 5
console.log(str3); // 5
let num1 = Number("42"); // 42
console.log(parseInt("42")); // 42
console.log(parseFloat("3.76")); // 3.76
console.log(typeof num1); // number

let intNum = parseInt(str1);
let intNum1 = parseInt('50px');
console.log(intNum1);
console.log(typeof intNum1); // number
console.log(intNum);
console.log(typeof intNum); // number

// Boolean Conversion -> Boolean()
Boolean(1); // true
Boolean(0); // False
Boolean('hello'); // true
Boolean(''); // false
Boolean(null); // false

// Falsy Values for Boolean 
// null, undefined, NaN, '', 0, false 
// other values are Truthy Values

let abc = Number('hello');
console.log(abc); // NaN
console.log(typeof abc); // NaN


// Edge Case Examples
// 1. Empty Array + Empty Array = ""
console.log([] + []); // ""

// 2. Empty Array + Number = String
console.log([] + 1); // "1"
// [] is converted to "" during string concatenation





// Loops: while and for

// 1. While loop

let i = 0;
while (i < 10) {
    console.log("Jai Shree Ram");
    i++;
};


// 2. Do While loop

let j = 0;
do {
    console.log(j);
    j++;
} while (j <= 3);

// 3. For Loop

for (let i = 0; i < 10; i++) {
    if (i === 5) break;
    console.log(i);
}

let z = 0;
for (; z < 5;) {
    console.log(z);
    z++;
}

// 4. for in loop - Iterates over the enumerable property names (keys) of an object.

const user = {
    name: "yuvraj",
    age: 23,
    address: "Madarpura",
    nation: "India"
};

for (let key in user) {
    console.log(key); // name
    console.log(key, ":", user[key]); // value
};

// 5. for of loop - Iterates over iterable values — like arrays, strings, maps, sets, etc.

// array
let arr5 = ["a", "b", "c"];

for (let value of arr5) {
    console.log(value);
};

// string
let string2 = "YUVRAJ";

for (let val of string2) {
    console.log(val);
};

// map
let map = new Map();
map.set('name', 'yuvi');
map.set('age', 23);

for (let entry of map) {
    console.log(entry);
};











// Operators 
// 1. Arithmetic Operator
let u = 10, b = 3;
console.log(u - b);  // 7
console.log(u + b);  // 13
console.log(u * b);  // 30
console.log(u / b);  // 3.33
console.log(u % b);  // 1
console.log(u ** b); // 1000 (10^3)

// Increment / Decrement
let x = 5;
console.log(++x);  // 5
console.log(x++);  // 6
console.log(--x);  // 4
console.log(x--);  // 5


// 2. Assignment Operators
let k = 10;

k += 5;  // k = k + 5
k -= 2;
k *= 3;
k /= 2;
k %= 4;
k **= 2; // k = k ** 2 = 10 ^ 2 = 100

console.log(k);

// 3. Comparison Operators

console.log(10 == "10");   // true
console.log(10 === "10");  // false
console.log(5 != "5");    // false
console.log(5 !== "5");    // true
console.log(5 > 3);        // true

// 4. Logical Operators 

console.log(true && true); // true
console.log(true && false); // false

console.log(true || false); // true
console.log(false || false); // false

console.log(!true); // false
console.log(!false); // true

// 5. String Concatenation

let firstName = "Yuvraj";
let lastName = "Singh";

let fullName = firstName + " " + lastName;
console.log(fullName);  // Yuvraj Singh

// 6. Ternary Operator

let ageBe = 16;
let resultIs = (ageBe >= 18) ? "Adult" : "Minor";
console.log(resultIs);  // Minor

// 7. Bitwise Operator

// 7.1 Bitwise And Operator (&)
console.log(5 & 3); // 1

// 7.2 Bitwise Or Operator (|)
console.log(5 | 3); // 7

// 7.3 Bitwise XOR (^)
console.log(5 ^ 3); // 6

// 7.4 Bitwise NOT (~)
console.log(~5); // -6

// 7.5 Bitwise Left Shift (<<)
console.log(5 << 1); // 10

// 7.6 Bitwise Right Shift (>>)
console.log(5 >> 1); // -3


// Math Objects

Math.floor(3.656565); // 3
Math.ceil(3.2) // 4
Math.round(3.6); // 4
Math.random(); //  Random number between 0 and 1
Math.max(10, 5); // 10
Math.min(5, 10); // 5
Math.abs(-58); // 58
Math.pow(8, 2); // 64 (8^2)
Math.sqrt(64); // 8

let randomNum = Math.floor(Math.random() * 100) + 1;
console.log(randomNum);















// Conditional Statements 

// 1. If Statement
let age1 = 20;

if (age1 >= 18) {
    console.log("You are an adult.");
}

// 2. If Else Statement
let age2 = 16;

if (age2 >= 18) {
    console.log("You can vote.");
} else {
    console.log("You are underage.");
}

// 3. Else If Statement
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A");
} else if (marks >= 75) {
    console.log("Grade: B");
} else if (marks >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: Fail");
}

// 4. Nested If Statement
let age3 = 25;
let hasID = true;

if (age3 >= 18) {
    if (hasID) {
        console.log("Entry allowed.");
    } else {
        console.log("ID required.");
    }
} else {
    console.log("Entry denied.");
}


// 5. Switch Case Statement

let vals = 1;

switch (vals) {
    case 1:
        console.log("Rusie");
        break;

    case 2:
        console.log("Yuvi");
        break;

    default:
        console.log("Rawat");
};

// 6. Truthy & Falsy Values
// Falsy - false, 0, "", null, undefined, NaN

if (0) {
    console.log("This won't run");
}

if ("hello") {
    console.log("This will run");
}
















// Functions
function greet() {
    console.log("Hello Sir How r u?");
};

greet(); // calling the function


// Function with Parameters
function greet1(name) {
    console.log("Hello Sir " + name + "How u doing?");
};

greet1("Yuvraj");


// Function with Return Value
function add(a, b) {
    return a + b;
};

let results = add(5, 3);
console.log(results); // 8

// Function Expression
const greet2 = function () {
    console.log("Hello from function expression!");
};

greet2();

// Arrow Functions (ES6)
const bye = () => {
    console.log("Hello from arrow function!");
};

bye();

// Arrow Function with parameters
const rem = (a, b) => a - b;
console.log(rem(10, 5)); // 5

const sqr = x => x * x;
console.log(sqr(8)); // 64

// Default Parameters
function greet(name = "Guest") {
    console.log("Hello", name);
}

greet();           // Hello Guest
greet("Yuvraj");   // Hello Yuvraj

// Rest Parameters (...args)
function sum(...nums) {
    let total = 0;
    for (let n of nums) {
        total += n;
    }
    return total;
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(10, 20, 30, 40)); // 100

// Function inside Function (Nested)
function outer() {
    console.log("I am outer");

    function inner() {
        console.log("I am inner");
    }

    inner();
}

outer();


// Function Scope

function test() {
    let y = 123;
    console.log(y);
};

test();
// console.log(y); // Error - y is not defined

//  Default Parameters

function test2(name = "Rawat") {
    console.log("Hello " + "Yuvraj " + name);
    console.log("Hello " + "Rusie " + name);
};

test2();
test2("Ji");

//  Rest Parameters 

function summ(...numbers) {
    let total = 0;
    for (let sum of numbers) {
        total = total + sum;
    };
    return total;
};

console.log(summ(1, 2, 3, 5));

// Callback Functions

function greetUser(callback) {
    console.log("Hello World");
    callback();
};

function sayBye() {
    console.log("Bye!");
};

greetUser(sayBye);

// Variables 

let age = 23;
const $name = "Yuvraj";
var _city = "Ajmer";













// alert()

// alert("Welcome to the site!");

// prompt() - prompt(message, defaultValue);

// let username = prompt("What's your name?", "Guest");
// alert("Hello " + username);

// confirm() - confirm(message);

// let isSure = confirm("Do you want to delete this file?");

// if (isSure) {
//     alert("File deleted!");
// } else {
//     alert("Action cancelled!");
// }










// Scope

// 1. Global Scope

let userName = "Yuvraj Singh Rawat"; // Global Scope

function hey() {
    console.log(`Hello ${userName}`); // can access userName
}

hey();
console.log(userName);

// 2. Local Scope

function showScore() {
    let score = 100; // local scope
    console.log(score);
};

showScore();
// console.log(score); // gives error

// 3️. Block Scope

{
    let age5 = 23;
    console.log(age5); // works
}

console.log(ag5); // gives error










// Strict Mode

// without strict mode
n = 10; // no error
console.log(n); // 10

// with strict mode
// "use strict";
// s = 10; // gives error
// let s = 10;
// console.log(s);


// Template Literals

const agee = 23;
const fName = "Yuvraj Singh";

console.log("Hello Mr" + fName + "Your Age is: " + agee);
console.log(`Hello Mr ${fName} Your Age is: ${agee}`);

// Q. Print sum of two numbers
const a1 = 10;
const b1 = 20;

console.log("Sum of " + a1 + "and" + b1 + "is: " + a + b); // 1020
console.log(`Sum of ${a1} and ${b1} is ${a + b}`); // 30