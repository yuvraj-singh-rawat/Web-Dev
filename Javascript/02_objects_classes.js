// Object 

// Two Ways to create Object

// 1. using new Object()
const cars = new Object();
cars.brand = "Toyota";
cars.model = "Fortuner";
cars.year = 2023;


// 2. Object Literal Syntax
const car = {
    name: "RR",
    model: "Phantom",
    color: "Black",
    year: 2028,
    country: { 
        n1: "india",
        n2: "usa",
        n3: "uk",
        n4: "uae"
    },
    sure: true,
    start: function() {
        console.log("Bhun Bhun!!!!");
    }
};

// console.log(car.name);
// console.log(car.country.n1);


car.model = "Ghost"; // updated property value in object
// console.log(car.model);

delete car.model;
// console.log(car.model);

// car.start();






// This keyword

let player = {
    name: "Yuvraj",
    lname: "Singh",
    address: "Ajmer",
    greet() {
        console.log("Hello " + this.lname); // this means => player.lname
    }
};

// player.greet();







// Loop Through an Object

// for (let info in player) {
//     console.log(info + ": " + player[info]);
// }




// Check if Key Exists
console.log("brand" in cars); // true






const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Object Methods
// console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person));
// console.log(Object.assign(person));

const assigned = Object.assign({}, person, cars);
console.log(assigned);

// Spread Operator shortcut of Object.assign
const copy = {...person};
console.log(copy);


// Optional Chaining (?).
// if any property has undefined path, then no error thrown
const user = { 
    name: "Yuvraj", 
    address: { 
        city: "Ajmer" 
    }
};

console.log(user.address?.city);       // Ajmer
console.log(user.address?.pincode);    // undefined
console.log(user.contact?.phone);      // undefined (no error)


// Nullish Coalescing ??
// if values is null or undefined, then add default

const age = null;
const finalAge = age ?? 18;

console.log(finalAge); // 18



// Object.freeze(obj)
// make object immutable

const settings = { 
    darkMode: true 
};
Object.freeze(settings);

settings.darkMode = false; // ❌ won't work
console.log(settings.darkMode); // true



// Object.seal(obj)
// can update values but can't add new keys or delete

const persons = { 
    name: "Yuvraj" 
};
Object.seal(persons);

persons.name = "Raj";        // ✅ allowed
persons.age = 23;            // ❌ not allowed
delete persons.name;         // ❌ not allowed




let a1 = {value: 12};
let b1 = a1;
b1.value = 20;
// console.log(b1); // 20
// console.log(a1); // 20








// Object Destructuring

let movie = {
    title: "KGF",
    year: 2018
};

let {title, year} = movie;

// console.log(title); // KGF
// console.log(year); // 2018





// Nested Destructuring

const users = {
    name: "Amit",
    address: {
        city: "Delhi",
        pincode: 110001
    }
};

const { address: { city } } = users;

console.log(city); // Delhi





// Rest Operator (...)
const {name, ...rest} = user;

console.log(name);
console.log(rest);






// Clone Objects

let c = Object.assign({}, movie);
let d = {...movie};

// console.log(c);
// console.log(d);









// Symbol Type

let sym = Symbol("abc");


let s1 = Symbol("id");
let s2 = Symbol("id");

// console.log(s1 === s2); // false because every Symbol is Unique

// Global Symbol

let sym1 = Symbol.for("id");
let sym2 = Symbol.for("id");

// console.log(sym1 === sym2); // global symbol uses








// Date Object

let timeNow = new Date();
console.log(timeNow);

let timeStamp = Date.now();
console.log(timeStamp);











// creating proto type in js 

// __proto__ using this to set prototype

// example 

const employee = {
    calcTax() {
        console.log("tax rate is 10%");
    },
};

const emp1 = {
    salary: 50000,
    calcTax() {
        console.log("tax rate is 10%")
    },
};

emp1.__proto__ = employee;










// Classes 

class TeslaCar {

    constructor(brand) {
        console.log("creating new object");
        this.brand = brand;
    }

    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand) {
        this.brandName = brand;
    }
}

let cyberTruck = new TeslaCar("xm1"); // constructor
cyberTruck.setBrand("cyberTruck");

let teslaz = new TeslaCar(); // constructor

// console.log(cyberTruck);

// Inheritance 

// passing down properties & methods from parent class to child class

class Parent {
    hello() {
        console.log("hello");
    }
}

class Child extends Parent {}

// another 

class Person {
    eat() {
        console.log("eat");
    } 

    sleep() {
        console.log("sleep")
    }

    work() {
        console.log("do nothing");
    }
}

class Engineer extends Person {
    work() {
        console.log("solve problem, build something");
    }
}

class Doctor extends Person {
    work() {
        console.log("treat patients");
    }
}

let yuvrajObj = new Engineer();

console.log(yuvrajObj.sleep());

// Super Keyword

// call constructor of its parent class to access the parent's properties and methods.

class tenth {
    constructor() {
        this.section = "a";
    }

    read() {
        console.log("read");
    }
}

class tenthB extends tenth {

    constructor(branch) {
        console.log("enter child constructor");
        super(); // to invoke parent class constructor
        this.branch = branch;
        console.log("exit child constructor");
    }

    homework() {
        console.log("solve homework today");
    }
}

let yuvi = new tenth("CSE");

// Examples 

// Question 1

let DATA = "secret information";

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    viewData() {
        console.log("website data = ", DATA);
    }
}

let student1 = new User("Yuvraj", "yuvi@gmail.com");
let student2 = new User("Singh", "singh@gmail.com");

student1.viewData();

// Error Handle 

let a = 12;
let b = 13;

try {
    console.log("a + b = ", a + b); // error
} catch (err) {
    console.log(err);
}