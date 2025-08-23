const fs = require('fs');

// 1. Create/Write a File
// sync
// fs.writeFileSync('notes.txt', 'Hello World Yuvraj!');

// async with callback
// fs.writeFile('notes.txt', 'Hello Yuvraj', (err) => {})



// 2. Read a File
// sync... (blocking)
// const result = fs.readFileSync('contact.txt', 'utf-8');
// console.log(result);

// async (non-blocking)
// fs.readFile('contact.txt', 'utf-8', (err, result) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(result);
//     }
// });

// 3. Append to File
// sync
// fs.appendFileSync('notes.txt', `\n Hey There You Logged at ${Date.now()}`)

// copy one file to another
// fs.cpSync('contact.txt', './dump/copy.txt');

// delete file
// fs.unlinkSync('copy.txt');

// file info
// console.log(fs.statSync('notes.txt'));

// make directory / folder
// fs.mkdirSync('dump'); // dump folder

// read files from folder
// const files = fs.readdirSync('dump');
// console.log(files);

// delete folder 
// fs.rmdirSync('dump')





fs.writeFile("input.txt", "Hello There", (err) => {});

fs.appendFile("input.txt", "Hello NodeJS", (err) => {
    if (err) throw err;
})



// Recommended for Large Files
// const readStream = fs.createReadStream("input.txt", "utf-8");

// readStream.on("data", (chunk) => {
//     console.log(chunk);
// })

// readStream.on("end", () => {
//     console.log("Reading Completed")
// })

// const writeStream = fs.createWriteStream("input.txt", "utf-8");

// writeStream.write("Welcome to NodeJS");



// Pipe => copy data from one file to another file
const readStream = fs.createReadStream("input.txt");
const writeStream = fs.createWriteStream("output.txt");

readStream.pipe(writeStream);