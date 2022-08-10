const addButton = document.getElementById("btn-add");
const containerTasks = document.getElementById("tasks");
const inputField = document.getElementById("input-list");
const listOfTasks = document.getElementById("task-item");

addButton.addEventListener("click", function () {
  const liTask = document.createElement("li");
  liTask.classList.add("task-item-added");
  liTask.innerText = inputField.value;

  const deleteBtn = document.createElement("button");

  deleteBtn.textContent = "\u00D7";
  deleteBtn.className = "btn-delete";
  liTask.appendChild(deleteBtn);

  const checkBtn = document.createElement("button");

  checkBtn.innerHTML;
  checkBtn.className = "btn-checked";

  listOfTasks.appendChild(liTask);
  inputField.value = "";

  deleteBtn.addEventListener("click", function () {
    listOfTasks.removeChild(liTask);
  });

  liTask.addEventListener("click", function () {
    liTask.style.textDecoration = "line-through";
    liTask.style.color = "#252729";
  });

  liTask.addEventListener("dblclick", function () {
    liTask.style.textDecoration = "none";
    liTask.style.userSelect = "none";
  });
});
