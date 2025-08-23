// Selectors

// 1. Select by ID
// document.getElementById("elementId");

let heading = document.getElementById('head');
console.log(heading.textContent);


// 2. Select by Class
// document.getElementsByClassName("className");

const para = document.getElementsByClassName('para');
console.log(para[0].textContent);
console.log(para[1].textContent);

for (let i = 0; i < para.length; i++) {
    para[0].style.color = "blue";
    para[0].textContent += " (Modified)";
}


// 3. Select By TagName
// document.getElementsByTagName("tagName");

const paras = document.getElementsByTagName("p");
console.log(paras); // HTMLCollection of 3 <p> elements

// Loop through all
for (let i = 0; i < paras.length; i++) {
    console.log(paras[i].textContent);
}


// 4. Select By Query Selectos
// document.querySelectorAll("selector");

const elements = document.querySelectorAll(".demo");
console.log(elements); // NodeList of 3 <p> elements

// Loop through all
elements.forEach((el) => {
    console.log(el.textContent);
});






// Create & Append Elements
let newDiv = document.createElement("div");
newDiv.innerText = "I am new Dev";
document.body.appendChild(newDiv);


// Remove Element
let oldElement = document.getElementById("head2");
oldElement.remove();