// Arrays are Mutable in JS

// Accessing & Modifying Array Elements
// let arr = [10, 20, 30, 40];
// console.log(arr[0]); // 10

// arr[0] = 50;
// console.log(arr[0]); // 50

// // Data types allowed
// let arrr = [10, "Yuvraj", 'X', true, null, undefined, {name: "Yuvi"}, [1,2]];
// console.log(arrr[6]);





// typeof vs isArray
// console.log(typeof arr); // object (not array)
// console.log(Array.isArray(arr)); // true





// ways of creating Arrays in JS 
// let arr = [1, 2, 3];
// let arr1 = new Array(5);
// let arr2 = Array.of(5);
// let arr3 = Array.from('avc');

// console.log(arr); // [1, 2, 3]
// console.log(arr1); // [ <5 empty items> ]
// console.log(arr2); // [5]
// console.log(arr3); // [a, v, c]




// important properties 
// let arr = [10, 20, 30, 40];

// console.log(arr.length); // 4
// console.log(arr.length - 1); // index 3 = 40

// arr.length = 5;
// console.log(arr.length); // 5





// // Loops
// let arr = [10, 20, 30, 40];

// // normal for loop
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// // for of loop
// for (let val of arr) {
//     console.log(val); // value
// }

// // for in for index
// for (let i in arr) {
//     console.log(i); // index
// }









// Useful Array Methods
// let arr = [10, 20, 30, 40, 50];

// ** these are mutating methods ** 
// push() - Add to end
// arr.push(100);
// console.log(arr);

// pop() - Remove from end
// arr.pop(100);
// console.log(arr); 

// shift() - Remove from start
// arr.shift(10);
// console.log(arr);

// unshift() - Add to start
// arr.unshift(10);
// console.log(arr);

// splice()	- Add/remove/replace in-place
// splice(start, deleteCount, ...items)
// arr.splice(2, 2, "x", "y");
// console.log(arr);

// reverse() - reverse array in-place
// arr.reverse();
// console.log(arr);

// sort() - sort the array 
// arr.sort();
// console.log(arr);

// fill() - Fill elements with static value
// let arr1 = new Array(5);
// arr1.fill(0);

// fill(value, start?, end?)
// arr1.fill(1,0,3);
// console.log(arr1);






// ** these are non-mutating methods ** 
// let arr = [10, 20, 30, 40, 50];

// slice(start?, end?, Update?) - Returns a copy portion of array
// console.log(arr.slice(1,3));

// concat() - Merge arrays
// let arr2 = [11, 12, 13, 14];
// console.log(arr.concat(arr2));

// console.log([11,12,13,14].concat(arr));

// includes() - Check if value exists
// console.log(arr.includes(30)); // true

// indexOf(value) - First index of a value
// console.log(arr.indexOf(20));

// lastIndexOf(value) - Last index of value (searches from end)
// console.log(arr.lastIndexOf(50));

// join(separator) - Join into string
// console.log(arr.join("-"));

// toString() - Convert array to string
// console.log(arr.toString());

// flat(depth) - Flatten nested arrays
// let arr2 = [1, 2, 3, 4, 5, [1,2, [1 , 2, 3]], [12, 4,12]];
// console.log(arr2.flat(1));

// flatMap(callback) - Like map() followed by flat(1)
// console.log([1, 2].flatMap(x => [x, x*2])); // [1, 2, 2, 4]

// const arr = ["hello", "world"];

// const chars = arr.flatMap(word => word.split(""));
// console.log(chars); 
// ['h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd']








// Other Important Methods
// let arr = [10, 20, 30, 40, 50];

// 1. forEach() - Run function on each item
// arr.forEach((arr, i) => {
//     console.log(i + ": " + arr);
// })


// 2. map(callback) - Transform each element → new array
// const squares = arr.map(num => num * num);
// console.log(squares);


// 3. filter(callback) - Return only elements where condition is true
// Syntax:
// const filtered = array.filter((element) => condition);

// const ages = [15, 18, 21, 16, 25];

// const adults = ages.filter(age => age >= 18);
// console.log(adults); // [18, 21, 25]



// 4. reduce(callback, initial) - Reduce to single value (sum, max, etc.)
// Syntax:
// const result = array.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
//   }, initialValue);


// const prices = [100, 200, 300];

// const total = prices.reduce((sum, price) => sum + price, 0);
// console.log(total); // 600




// 5. find(callback) - Return first element matching condition
// Syntax:
// const result = array.find((element) => condition);


// const users = [
//     { id: 1, name: 'Yuvraj' },
//     { id: 2, name: 'Rawat' },
// ];
  
// const found = users.find(user => user.id === 2);
// console.log(found); // { id: 2, name: 'Rawat' }




// 6. findIndex(callback) - Return index of first match

// Syntax:
// array.findIndex(function(element, index, array) {
//     // return true ya false
// })

// const numbers = [10, 15, 25, 30, 40];

// const index = numbers.findIndex(num => num > 20);

// console.log(index);  // Output: 2





// 7. every(callback) - Check if all items satisfy condition

// const scores = [80, 85, 90];

// const allPassed = scores.every(score => score > 60);
// console.log(allPassed); // true





// 8. some(callback) - Check if at least one item satisfies
// Syntax: 
// const result = array.some((element) => condition);


// const marks = [10, 20, 50, 90];

// const hasPassed = marks.some(mark => mark > 40);
// console.log(hasPassed); // true

