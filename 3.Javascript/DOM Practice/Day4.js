let increase = document.querySelector("#increase");
let quantity = document.querySelector("#quantity");
let total = document.querySelector("#total");
let decrease = document.querySelector("#decrease");


let num = 1;
let price = 500

increase.addEventListener("click" , () => {
    num++
    quantity.innerText = num;

    let totalPrice = price * num;
    total.innerText = totalPrice; 
})

decrease.addEventListener("click",() => {
    if(num > 1) {
        num--;
        quantity.innerText = num;

        let totalPrice = price * num;
        total.innerText = totalPrice; 
    }

   
})
