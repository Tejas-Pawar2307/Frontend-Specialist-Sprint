// for loop

// Printing Number 1 to 10.
for (let i = 1; i <= 10; i++) {
    console.log("Hello World.......!");
}


// While Loop

// Printing Number 1 to 10.
let i = 1;
while (i<=5) {
    console.log("i=",i);
    i++;
}

// for-of Loop

let str = "TejasJanardhanPawar"

for(let i of str) {
    console.log("i=",i);
}

// for-in Loop

let student = {
    name : "Tejas",
    age : 19,
    CGPA : 9.9,
    isPass : true,
};

for (let key in student) {
    console.log("Key=",key , "Value=" , student[key]);
}
