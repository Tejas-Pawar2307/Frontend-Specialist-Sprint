let todoList = document.querySelector("#todoList");
let addBtn = document.querySelector("#addBtn");
let todoInput = document.querySelector("#todoInput");
let errorMessage = document.querySelector("#errorMessage");


todoInput.addEventListener("input", () => {
    if(todoInput.value === "") {
        errorMessage.innerText = "Please enter a task.";
        errorMessage.classList.remove("hidden");
    } else {
        errorMessage.classList.add("hidden");
    }
});


addBtn.addEventListener("click", () => {
    if (todoInput.value === "") {
        errorMessage.innerText = "Please enter a task.";
        errorMessage.classList.remove("hidden");
        return;
    }

    
    let task = document.createElement('li');
    let deleteBtn  = document.createElement('button');

    task.innerText = todoInput.value;
    deleteBtn.innerText = "Delete";

    task.append(deleteBtn);
    todoList.append(task);

    deleteBtn.addEventListener("click", () => {
    task.remove();
    });

    todoInput.value = "";

});


