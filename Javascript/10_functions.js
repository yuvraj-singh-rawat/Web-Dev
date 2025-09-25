// Functions

// 1. Normal Way
function greet() {
    console.log("Hello World");
}

greet(); // Hello World


// Function Expression => When we Declare Function in Variable
const num = function (num1, num2) {
    console.log(num1 + num2);
}

num(15, 10); // 25

// 2. Arrow Function
const add = (a, b) => { // parameters
    return a + b;
};

console.log(add(5, 10)); // arguments


// 3. Default Parameters

function say(name = "Guest") {
    console.log(`Hello ${name}`);
}

greet("Yuvraj"); // Hello Yuvraj
greet(); // Hello Guest


// 4. Rest Parameter 

function sumAll(...nums) {
    return nums.reduce((a, b) => a + b, 0);
}

console.log(sumAll(1, 2, 3, 4, 5, 6)); // 21








// Callback Functions
// A callback is a function passed as an argument to another function, to be executed later.

// function sayHello(name, callback) {
//     console.log("Hi " + name);
//     callback();
// }

// function sayBye() {
//     console.log("Bye!");
// }

// sayHello("Yuvraj", sayBye); // Hi Yuvraj Bye!



// Another Example

// const doSomething = function (callback) {
//     console.log("Your File is Downloading......")
//     setTimeout(function() {
//         callback();
//     }, 5000);
// };

// const callback = function() {
//     console.log("Your File is Downloaded!")
// };

// doSomething(callback);











// Callback Hell

// setTimeout(() => {
//     console.log("Task 1...");
//     setTimeout(() => {
//         console.log("Task 2...");
//         setTimeout(() => {
//             console.log("Task 3...");
//             setTimeout(() => {
//                 console.log("Task 4...");
//             }, 5000);
//         }, 1000);
//     }, 1000);
// }, 5000)














// High Order Functions -> functions who takes another functions as an arguments(callback), return a function as its result.

// function greet(name) {
//     return `Hello ${name}`;
// }

// function process(callback) { // Process is HOF it takes greet as an Argument
//     let name = "Yuvraj";
//     return callback(name);
// }

// console.log(process(greet)); // Hello Yuvraj




// Example 

const radius = [1, 2, 3, 4];

// const area = function (radiusArray) {
//     const result = [];
//     for (let i = 0; i < radiusArray.length; i++) {
//         const a = Math.PI * radiusArray[i] * radiusArray[i];
//         result.push(a);
//     }
//     return result;
// }

// const ans = area(radius);
// console.log(ans);

// const circumference = function (radiusArray) {
//     const result = [];
//     for (let i = 0; i < radiusArray.length; i++) {
//         const a = 2 * Math.PI * radiusArray[i];
//         result.push(a);
//     }
//     return result;
// }

// const ans2 = circumference(radius);
// console.log(ans2);


// Better Way to Write Above Code in Higher Order Function

// const formulaOfArea = function (r) {
//     return Math.PI * r * r;
// }

// const formulaOfCircumference = function (r) {
//     return 2 * Math.PI * r;
// }

// const calculate = function (radiusArray, formula) {
//     const result = [];

//     for (let i = 0; i < radiusArray.length; i++) {
//         const a = formula(radiusArray[i]);
//         result.push(a);
//     }
//     return result;
// }

// const ans3 = calculate(radius, formulaOfArea);
// const ans4 = calculate(radius, formulaOfCircumference);
// console.log(ans3);
// console.log(ans4);
















// setTimeout() Function

// setTimeout(function() {
//     console.log("after 2 seconds");
// }, 2000); // 2000 means 2 seconds








// Stop Timeout

// const id = setTimeout(() => {
//     console.log("This will never run");
// }, 5000);

// clearTimeout(id);







// setInterval()
// run again and again in every 1 second

// setInterval(() => {
//     console.log("runs in every 1 seconds");
// }, 1000);








// Stop Interval using clearInterval()
// let count = 0;

// const timerId = setInterval(() => {
//   count++;
//   console.log("Count:", count);

//   if (count === 5) {
//     clearInterval(timerId);
//     console.log("Interval band ho gaya!");
//   }
// }, 1000);











// Asynchronous Behavior
// console.log("Start");

// setTimeout(() => {
//     console.log("Inside setTimeout"); // execute at last
// }, 0);

// console.log("End");







// let promise = new Promise(function(resolve, reject) {
//     let success = true;
//     if (success) {
//         resolve("work done");
//     } else {
//         reject("fail");
//     }
// });

// promise.then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });

// function downloadFile() {
//     return new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             resolve("File downloaded!");
//         }, 3000);
//     });
// }

// downloadFile().then(function(result) {
//     console.log(result);
// }).catch(function(error) {
//     console.log(error);
// });

// function step1() {
//     return new Promise(function(resolve) {
//         resolve("step 1 done");
//     })
// };

// function step2() {
//     return new Promise(function(resolve) {
//         setTimeout(function() {
//             resolve("step 2 done");
//         }, 2000);
//     })
// };

// step1().then(function(result) {
//     console.log(result);
//     return step2();
// }).then(function(result) {
//     console.log(result);
// })

// function download() {
//     return new Promise(resolve => {
//         setTimeout(() => resolve("Download Done"), 3000);
//     });
// }

// async function start() {
//     console.log("starting...");
//     let result = await download();
//     console.log(result);
//     console.log("finosh");


// }

// start();








// Spread Operator in Functions
// function sum(a, b, c, d, e) {
//     return a + b + c + d + e;
// }

// function sum(...numbers) {
//     let sum = 0;
//     for (let i = 0; i < numbers.length; i++) {
//         sum += number[i];
//     }
//     return sum;
// }

// console.log(sum(1, 2, 3, 4, 5)); // 15
