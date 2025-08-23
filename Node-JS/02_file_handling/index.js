// How NodeJS Works ?

const fs = require('fs');
const os = require('os')

console.log("1");

// 1. Blocking (Sync)
// first print 1 then print result then print 2
// let result = fs.readFileSync('contact.txt', 'utf-8');
// console.log(result);

// console.log("2");




// 2. Non - Blocking (Async)
// first it prints all normal values then it read contact.txt at last
fs.readFile('contact.txt', 'utf-8', (err, result) => {
    console.log(result);
})

console.log('2');
console.log('3');
console.log('4');


// Default Thread Pool Size = 4

// Max depends on CPU Cores
// so for me size is 4

// lets check cores
console.log("Your PC Have Cores: ", os.cpus().length);
