let btn1 = document.querySelector("#btn1");

btn1.onclick = () => {
    console.log("btn1 was Clicked");
    let a = 25;
    a++;
    console.log(a);
};

let div = document.querySelector("div");
div.onmouseenter = () => {
    console.log("You are Inside Div");
}

// Event Listeners

btn1.addEventListener("click" , () => {
    console.log("Button was clicked-Handler1");
});

btn1.addEventListener("click" , () => {
    console.log("Button was clicked-Handler2");
});

const Handler3 = () => {
    console.log("Button was clicked-Handler3");
};

btn1.removeEventListener("click", Handler3);

btn1.addEventListener("click" , () => {
    console.log("Button was clicked-Handler4");
});


// remove

btn1.removeEventListener("click", Handler3);
