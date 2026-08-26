// Length

let a = ["HTML" , "CSS" , "JS"]
console.log(a.length);

// convert into String

let s = a.toString();
console.log(s);

// Join
console.log(a.join('|'));

// Delete Operator
console.log(delete a[1]);
console.log(a);

// flat()
const b = a.flat(Infinity);
console.log(b);

// Push
a.push("React");
console.log(a);

// unshift
a.unshift("TypeScript");
console.log(a);

// pop
a.pop();
console.log(a);

// Shift
a.shift();
console.log(a);

// splice()

a.splice(1,1)
console.log(a);

a.splice(1,0,"Node.js")
console.log(a);

//slice()

const sli = a.slice(0,2);
console.log(sli);

// some()

let res = a.some((word) => word = "CSS");
console.log(res);

// map()

const obj = {
    a : 1,
    b : 2
};

let str = obj.toString();
console.log(str);


let toggleBtn = document.querySelector("#toggleBtn");
let input = document.querySelector("#password");

toggleBtn.addEventListener("click", () => {

    if (input.type === "password") {
        input.type = "text";
        toggleBtn.innerText = "Hide Password";
    } else {
        input.type = "password";
        toggleBtn.innerText = "Show Password";
    }

});





