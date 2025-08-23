// Synchronous -> means code runs in a particular sequence of instructions given in the program.

// example 

// let a = "a";
// let b = "b";
// let c = "c";

// console.log(a);
// console.log(b);
// console.log(c);









// Asynchronous -> means code execution allows to execute next instructions immediately and doesn't block the flow.

// example 

// function hello() {
//     console.log("hello");
// };

// setTimeout(hello, 2000); // timeout after 2 second

// another way to write this code

// console.log("one");
// console.log("two");
// console.log("three");

// setTimeout(() => {
//     console.log("hello");
// }, 2000); // timeout

// console.log("four");
// console.log("five");
// console.log("six");

// another example

// function sum(a, b) {
//     console.log(a+b);
// }

// function calculator(a, b, sumCallback) {
//     sumCallback(a, b);
// }

// calculator(1, 2, (a, b) => {
//     console.log(a+b);
// });












// Async Await Function

function api() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("weather data");
            resolve("✅ Data fetched!");
        }, 2000);
    });
}

async function getWeatherData() {
    await api(); // 1st
    await api(); // 2nd
};

getWeatherData();







// await -> pauses the execution of its surrounding async function until the promise is settled

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// async function getAllData() {
//     console.log("calling data 1");
//     await getData(1);
//     console.log("calling data 2");
//     await getData(2);
//     console.log("calling data 3");
//     await getData(3);
//     console.log("calling data 4");
//     await getData(4);
//     console.log("calling data 5");
//     await getData(5);
//     console.log("calling data 6");
//     await getData(6);
// }

// console.log(getAllData());





// IIFE (Immediately Invoked Function Expression)
// function that is called immediately as soon as it is defined

// (function () {
//     console.log("abc");
// }) ();
