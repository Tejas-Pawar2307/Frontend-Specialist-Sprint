let marks = [98,52,7,78];
console.log(marks);

// Array Indices

console.log(marks[3]);

marks[0] = 100;
console.log(marks[0]);

// Looping over an Array

let Hero = ["Tony" , "Shaktiman" , "Spiderman" , "Batman" , "Chitti"];

// for Loop
for (let i=0; i<Hero.length; i++) {
    console.log(Hero[i]);
}

// for of Loop

for (let i of Hero) {
    console.log(i);
}

// Array Methods

let foodItems = ["Pizza", "Apple","Burger","Chips"];
let dcHero = ["Superman","Batman"];
let arr = [1,2,5,8,9,6,4];

// 1.Push Method
foodItems.push("Paneer");

// 2.Pop Method
let deletedItem = foodItems.pop();

// 3.Concat Method
let hero = foodItems.concat(dcHero);

// 4.Unshift Method
dcHero.unshift("Shaktiman")

// 5.shift Method
dcHero.shift();

// 6.Splice Method
arr.splice(2,2,101,102);


console.log(arr);
console.log(foodItems)
console.log("Deleted",deletedItem)
console.log(hero)
console.log(dcHero)
