// Functions.

function myFunction() {
    console.log("Welcome....! , We are learning JS");
}

myFunction();
myFunction();

// Based on Parameter.
 
function myFun(msg) {
    console.log(msg);
}

myFun("I Love JS.....!");


// Function -> 2 numbers , sum

function sum(a,b) {
    total = a+b;
    return total;
}

let val = sum(5,15);
console.log(val);

// Arrow Function / Modern JS

const arrowSum = (a,b) => {
    console.log(a+b);
}

const arrowMuli = (a,b) => {
    console.log(a*b);
}

// for each loop in arrays

let value = [1,2,3,4,5];

value.forEach(function printVal(val) {
    console.log(val);
});

// Map ---> Create a new Array after performing the operation [for creating a new array]

let nums = [67,52,3]

let newArray = nums.map((val) => {
    return val*5;
});

console.log(newArray)

// Filter ---> Filter the result on the basis of the gibven condition

let numArrays = [1,2,3,4,5,6,7,8,9]

let evenArray = arr.filter ( (val) => {
    return val > 3;
});

console.log(evenArray);

// Reduce

