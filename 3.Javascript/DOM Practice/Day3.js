let increaseBtn = document.querySelector("#increase");
let text = document.querySelector("#text");

let currSize = 16;


increaseBtn.addEventListener("click", () => {
    currSize += 2;
    text.style.fontSize = currSize + "px";
    
});
