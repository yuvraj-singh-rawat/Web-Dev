// const Emitter = require("./emitter") // Custom events
const Emitter = require("events") // Core NodeJS module events
const events = require("./config").events;

// console.log(obj)

const emiter = new Emitter();

emiter.on(events.GREET, function() {
    console.log("Hello")
})

emiter.on(events.GREET, function() {
    console.log("greet occurred!")
})

emiter.on(events.FILEOPEN, function() {
    console.log("file open successfully")
})

emiter.on(events.FILESAVED, function() {
    console.log("file saved successfully")
})

emiter.on("my-age", function() {
    console.log("i am 21 years old")
})

emiter.emit(events.FILEOPEN);
emiter.emit(events.FILESAVED);
emiter.emit(events.GREET);