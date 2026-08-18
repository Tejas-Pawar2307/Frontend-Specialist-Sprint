let inc = document.querySelector("#inc");
let count = document.querySelector("#count");
let dec = document.querySelector("#dec");
let reset = document.querySelector("#reset");
let counter = 0;

inc.addEventListener("click", () => {
    counter++;
    count.innerText = counter;
});

dec.addEventListener("click", () => {
    if(counter > 0) {
        counter--;
    } else if(counter === 0) {
        console.log("Value Can Not be Negative...!")
        alert("No Negativity Bro");
    }
    count.innerText = counter;
})

reset.addEventListener("click" , () => {
    counter = 0;
    count.innerText = counter;
})
