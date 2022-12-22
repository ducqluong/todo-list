// Selectors
const todoInput = document.querySelector(".todo-input");
const submitButton = document.querySelector(".submit-button");
const todoList = document.querySelector(".todo-list");

// Event Listeners
submitButton.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

// Functions

function addTodo(event) {
  event.preventDefault();

  const todoItem = document.createElement("li");
  todoItem.classList.add("todo-item");

  const todoItemInput = document.createElement("input");
  todoItemInput.value = todoInput.value;
  todoItemInput.classList.add("todo-input");
  todoItemInput.setAttribute("readOnly", true);

  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");

  todoItem.appendChild(todoItemInput);
  todoItem.appendChild(deleteButton);

  todoList.appendChild(todoItem);

  todoInput.value = "";
}

function deleteTodo(event) {
  const item = event.target;

  if (item.classList[0] === "delete-button") {
    const todo = item.parentElement;
    todo.remove();
  }
}
