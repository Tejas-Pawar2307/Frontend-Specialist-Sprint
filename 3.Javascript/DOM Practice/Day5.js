let generateBtn = document.querySelector("#generateBtn");
let colorBox = document.querySelector("#colorBox");
let colorText = document.querySelector("#colorText");


generateBtn.addEventListener("click" , () => {

    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let color = `rgb(${red} , ${green} , ${blue})`;

    colorBox.style.backgroundColor = color
    colorText.innerText = color;
})
