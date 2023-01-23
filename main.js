// Select elements
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// Form submit event
todoForm.addEventListener("submit", addTodo);

// Add todo
function addTodo(e) {
  e.preventDefault();

  // Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-item");

  // Create li
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-text");
  todoDiv.appendChild(newTodo);

  // create complete checkbox
  const checkbox = document.createElement("input");
  checkbox.type="checkbox";
  checkbox.addEventListener("click", toggleComplete);
  checkbox.classList.add("todo-checkbox");
  todoDiv.appendChild(checkbox);
  

  // MARK AS Important button
  const importantBtn = document.createElement("button");
  importantBtn.innerHTML = "Mark as important";
  importantBtn.classList.add("todo-important");
  importantBtn.addEventListener("click", toggleImportant);
  todoDiv.appendChild(importantBtn);

  // Create delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delete";
  deleteBtn.classList.add("todo-delete");
  todoDiv.appendChild(deleteBtn);

  // Append to list
  todoList.appendChild(todoDiv);

  // Clear input
  todoInput.value = "";
}

// Delete todo
todoList.addEventListener("click", deleteCheck);

function deleteCheck(e) {
  const item = e.target;
  if (item.classList[0] === "todo-delete") {
    const todo = item.parentElement;
    todo.remove();
  }
}

//Completed todo

function toggleComplete(e) {
  const item = e.target;
  if (item.classList.contains("todo-checkbox")) {
    item.parentElement.querySelector('.todo-text').classList.toggle("completed");
  }
}

// mark as important todo
function toggleImportant(e) {
  const item = e.target;
  if (item.innerHTML === "Mark as important") {
    item.parentElement.querySelector('.todo-text').classList.add("important");
    item.innerHTML = "Mark as not important";
  } else {
    item.parentElement.querySelector('.todo-text').classList.remove("important");
    item.innerHTML = "Mark as important";
  }
}
