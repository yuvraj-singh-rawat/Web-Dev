// JavaScript Callbacks

/*
A callback is a function passed as an argument to another function, which is then executed after some operation completes.

✅ It allows function A to call function B when it’s done — or at some later time.

JavaScript is asynchronous by nature (like when making API calls, timers, or reading files), and callbacks help handle those scenarios smoothly.
*/


function greeting(name) {
    console.log(`Hello, ${name}`);
};

function userInput(callback) {
    const name = "Yuvraj";
    callback(name);
};

userInput(greeting); // greeting passed as a callback to userInput


// Callback in Asynchronous Code

console.log("start");

setTimeout(function() {
    console.log("sorry message delayed!");
}, 2000);

console.log("end");

function logMessage() {
    console.log("I am callback!");
};

setTimeout(logMessage, 1000);

// Callback with Parameters

function showResult(result) {
    console.log(result);
}

function calc(a, b, callback) {
    let sum = a + b;
    callback(sum)
};

calc(5, 10, showResult);

// Callback Hell

// When callbacks get too nested, it’s called callback hell — ugly and hard to manage.

setTimeout(() => {
    console.log("i'm done");
    setTimeout(() => {
        console.log("again i'm done");
            setTimeout(() => {
            console.log("after i'm done");
        }, 1000);
    }, 2000);
}, 3000);

// example for printing data after few data using fix time

function getData(dataId, getNextData) {
    setTimeout(() => {
        console.log("data", dataId);
        if (getNextData) {
            getNextData();
        }
    }, 2000);
}

getData(1, () => {
    getData(2, () => {
        getData(3);
    });
});