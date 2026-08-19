let body = document.querySelector("#body");
let heading = document.querySelector("#heading");
let btn = document.querySelector("#btn");

let currTheme = "light";

btn.addEventListener("click", () => {
    if(currTheme === "light") {
        currTheme = "dark";
        body.classList.remove('bg-white');
        body.classList.add('bg-black');
        heading.classList.remove('text-black');
        heading.classList.add('text-white')
    } else if(currTheme === "dark") {
        currTheme = "blue";
        body.classList.remove('bg-black');
        body.classList.add('bg-blue-600');
    } else if(currTheme === "blue") {
        currTheme = "green";
        body.classList.remove('bg-blue-600');
        body.classList.add('bg-green-600');
    } else {
        currTheme = "light";
        body.classList.remove("bg-green-600")
        body.classList.add('bg-white');
        heading.classList.remove('text-white');
        heading.classList.add('text-black')
    }
    console.log(currTheme);
});
