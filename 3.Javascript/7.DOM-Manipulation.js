// DOM Manipulation

// Element Selector.

let heading = document.getElementById("header");
console.dir(heading);

// Selecting With class

let header = document.getElementsByClassName("heading");
console.dir(header);

// Selecting With tag

let params = document.getElementsByTagName("p");
console.dir(params);

// Query Selector ---> Give the Nodelist [using their selector Method]

let elements = document.querySelector("p");
console.dir(elements);

// Properties

// tagname
let firstEl = document.querySelector("p");
console.dir(firstEl);

// innerText
let div = document.querySelector("div");
console.dir(div);

// Attributes

// for get 
let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para.getAttribute("class"))

// for set
let para = document.querySelector("p");
console.log(para.setAttribute("class", "newClass"));



// style
let div = document.querySelector("div");

div.style.backgroundColor = "Purple";
div.style.fontSize = "26px";

// insert element

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
console.log(newBtn);

let div = document.querySelector("div");
div.append(newBtn);

let div = document.querySelector("div");
div.prepend(newBtn);

let div = document.querySelector("div");
div.before(newBtn);

let div = document.querySelector("div");
div.afters(newBtn);

// Delete Element

let para = document.querySelector("div");
para.remove();
