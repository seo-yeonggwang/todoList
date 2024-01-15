const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
let todos = [];

function saveTodo(){
    localStorage.setItem("todos", JSON.stringify(todos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;

    const span = document.createElement("span");
    span.innerText = newTodo.text;

    const button = document.createElement("button");
    button.innerText = "X";
    button.addEventListener("click", deleteTodo);

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

function deleteTodo(event){
    const li = event.target.parentElement;
    li.remove();
    todos = todos.filter((todo) => todo.id !== parseInt(li.id));
    saveTodo();
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo = toDoInput.value;
    const newToddoObj = {
        text: newTodo,
        id: Date.now()
    };

    toDoInput.value = "";
    todos.push(newToddoObj);
    paintToDo(newToddoObj);
    saveTodo();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedTodos = localStorage.getItem("todos");

if(savedTodos){
    const parsedTodos = JSON.parse(savedTodos);
    todos = parsedTodos;
    parsedTodos.forEach(paintToDo);
}