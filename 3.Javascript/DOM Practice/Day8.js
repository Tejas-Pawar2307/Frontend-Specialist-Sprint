let username = document.querySelector("#username");
let usernameError = document.querySelector("#usernameError");
let email = document.querySelector("#email");
let emailError = document.querySelector("#emailError");
let password = document.querySelector("#password");
let passwordError = document.querySelector("#passwordError");
let confirmPassword = document.querySelector("#confirmPassword");
let confirmPasswordError = document.querySelector("#confirmPasswordError");
let signupForm = document.querySelector("#signupForm");
let successMessage = document.querySelector("#successMessage");



username.addEventListener("input", () => {
    if(username.value.length < 3) {
        usernameError.innerText = "Username Must be at least 3 Character";
        usernameError.classList.remove("hidden");
    } else {
        usernameError.classList.add("hidden");
    }
});

email.addEventListener("input", () => {
    if(email.value.includes("@") && email.value.includes(".")) {
        emailError.classList.add("hidden");
    } else {
        emailError.innerText = "Email is not Valid";
        emailError.classList.remove("hidden");
    }
})

password.addEventListener("input", () => {
    if(password.value.length < 8) {
        passwordError.innerText = "Password must contain at least 8 characters.";
        passwordError.classList.remove("hidden");
    } else {
        passwordError.classList.add("hidden");
    }
})

confirmPassword.addEventListener("input", () => {
    if(confirmPassword.value === password.value) {
        confirmPasswordError.classList.add("hidden");
    } else if (confirmPassword.value !== password.value) {
        confirmPasswordError.innerText = "Password is not Matched";
        confirmPasswordError.classList.remove("hidden");
    }
});

signupForm.addEventListener("submit", (event) => {
    if(username.value.length >= 3 && email.value.includes("@") && email.value.includes(".")
    && password.value.length >= 8 && confirmPassword.value === password.value) {
    event.preventDefault();
    successMessage.innerText = "Account created Successfully...!";
    successMessage.classList.remove("hidden")
    }
})
