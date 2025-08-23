// represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// solution to callback hell

// way to create a promise
// let promise = new Promise((resolve, reject) => {});

// three states are their in promises

// 1. pending - initial state, neither fulfilled nor rejected.
// 2. fulfilled  - operation completed successfully.
// 3. rejected  - operation failed.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
    let success = true;

    if (success) {
        resolve("Operation was successful!");
    } else {
        reject("Operation failed.");
    }
});

console.log(myPromise);






// error handling using .then() and .catch()
// myPromise
//     .then((result) => {
//         console.log("Resolved:", result);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     });





// Finally() : runs no matter what fails or success
// myPromise
//     .then((result) => {
//         console.log("Resolved:", result);
//     })
//     .catch((error) => {
//         console.log("Rejected:", error);
//     })
//     .finally(() => {
//         console.log("Finished!");
//     });






// async with timeout
// const fetchData = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = "here is your data bro!";
//             resolve(data);
//         }, 2000);
//     });
// };

// fetchData()
//     .then((data) => {
//         console.log("Received:", data);
//     })
//     .catch((err) => {
//         console.log("Error:", err);
//     });









// Multiple Promises
const p1 = new Promise((resolve) => setTimeout(() => resolve("🍎 Apple"), 2000));
const p2 = new Promise((resolve) => setTimeout(() => resolve("🍌 Banana"), 1000));
const p3 = new Promise((resolve) => setTimeout(() => resolve("🍇 Grapes"), 1500));

Promise.all([p1, p2, p3])
  .then((results) => {
    console.log("All Fruits:", results);
  })
  .catch((err) => {
    console.error("One failed:", err);
  });

// Output 
// All Fruits: [ '🍎 Apple', '🍌 Banana', '🍇 Grapes' ]


Promise.race([p1, p2, p3])
  .then((fastest) => {
    console.log("Fastest Fruit:", fastest); // Fastest Fruit: 🍌 Banana
  });


const p4 = new Promise((_, reject) => setTimeout(() => reject("❌ Failed"), 500));

Promise.allSettled([p1, p2, p3, p4])
  .then((results) => {
    console.log("Settled Results:");
    console.log(results);
  });


// Status Like This
// Settled Results:
// [
//   { status: 'fulfilled', value: '🍎 Apple' },
//   { status: 'fulfilled', value: '🍌 Banana' },
//   { status: 'fulfilled', value: '🍇 Grapes' },
//   { status: 'rejected', reason: '❌ Failed' }
// ]





// Another way
// Promise.all([
//     Promise.resolve("First"),
//     Promise.resolve("Second"),
//     Promise.resolve("Third"),
// ]).then((result) => {
//     console.log(result);
// }).catch((error) => {
//     console.log(error);
// })


// Promise.race([
//     new Promise((res) => setTimeout(() => res("first done"), 1000)),
//     new Promise((res) => setTimeout(() => res("second done"), 2000))
// ]).then(console.log);











// Promise Chain

// function step1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 1 complete");
//             resolve("Data from step 1");
//         }, 1000);
//     });
// }

// function step2(prevData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 2 complete, Got:", prevData);
//             resolve("Data from step 2");
//         }, 1000);
//     });
// }

// function step3(prevData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("Step 3 complete, Got:", prevData);
//             resolve("Data from step 3");
//         }, 1000)
//     })
// }

// step1()
//     .then(step2)
//     .then(step3)
//     .then((finalResult) => {
//         console.log("Final Result:", finalResult);
//     })
//     .catch((err) => {
//         console.error("Error", err);
//     });