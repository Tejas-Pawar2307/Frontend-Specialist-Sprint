let nameInput = document.querySelector("#nameInput");
let roleInput = document.querySelector("#roleInput");
let bioInput = document.querySelector("#bioInput");
let updateBtn = document.querySelector("#updateBtn");

let profileName = document.querySelector("#profileName");
let profileRole = document.querySelector("#profileRole");
let profileBio = document.querySelector("#profileBio");

let themeBtn = document.querySelector("#themeBtn");
let profileCard = document.querySelector("#profileCard");
let currTheme = "light";

updateBtn.addEventListener("click", () => {
    if(nameInput.value === "" || roleInput.value === "" || bioInput.value === "") {
        alert("Filling All the Information is Required...!")
    } else {
        profileName.innerText = nameInput.value;
        profileRole.innerText = roleInput.value;
        profileBio.innerText = bioInput.value;
    }
});


themeBtn.addEventListener("click", () => {
    if(currTheme === "light") {
        currTheme = "black";
        profileCard.classList.remove('bg-white')
        profileCard.classList.add('bg-black')
        profileName.classList.remove('text-black');
        profileName.classList.add('text-white');
        profileBio.classList.remove('text-black');
        profileBio.classList.add('text-white');

    } else {
        currTheme = "light";
        profileCard.classList.remove('bg-black')
        profileCard.classList.add('bg-white')
        profileName.classList.add('text-black');
        profileName.classList.remove('text-white');
        profileBio.classList.remove('text-white');
        profileBio.classList.add('text-black');
    }
});
