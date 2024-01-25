const todoForm = document.querySelector("#todo__form");
const todoInput = document.querySelector("#todo__input");
const toListGroup = document.querySelector("#todo__list__group");
const saveBtn = document.querySelector("#save");

const todos = [];
var todoInitialId = 1;

function TodoPrototype(text, id) {
  this.id = id;
  this.text = text;
}

function removeTodo(todoId) {
  document.querySelector(`#todo-number-${todoId}`).remove();
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === todoId) {
      todos.splice(i, 1);
    }
  }
}

function todoCreateDom(todoText, todoId) {
  var listItem = document.createElement("li");
  var deleteBtn = document.createElement("button");
  listItem.setAttribute(
    "class",
    "list-group-item d-flex  align-items-center justify-content-between"
  );
  deleteBtn.setAttribute("class", "btn btn-outline-danger");
  deleteBtn.textContent = "Delete";
  listItem.textContent = todoText;
  listItem.appendChild(deleteBtn);
  listItem.setAttribute("id", `todo-number-${todoId}`);
  toListGroup.appendChild(listItem);

  deleteBtn.addEventListener("click", function () {
    removeTodo(todoId);
  });
}

function todoCreate(todoText, todoId) {
  todoCreateDom(todoText, todoId);
  todos.push(new TodoPrototype(todoText, todoId));
}

function function1(e) {
  e.preventDefault();
  todoCreate(todoInput.value, todoInitialId);
  todoInitialId++;
  todoForm.reset();
}
todoForm.addEventListener("submit", function1);

saveBtn.addEventListener('click', function(){
    localStorage.setItem('works', todoInput.value)
})