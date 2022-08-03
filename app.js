let addButton = document.getElementById("btn-add");
let containerTasks = document.getElementById("tasks");
let inputField = document.getElementById("input-list");
let listOfTasks = document.getElementById("task-item");

addButton.addEventListener("click", function () {
  var liTask = document.createElement("li");
  liTask.classList.add("task-item-added");
  liTask.innerText = inputField.value;

  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "\u00D7";
  deleteBtn.className = "btn-delete";
  liTask.appendChild(deleteBtn);

  var checkBtn = document.createElement("button");
  //   checkBtn.textContent = ;
  checkBtn.innerHTML;
  checkBtn.className = "btn-checked";
  //   liTask.appendChild(checkBtn);

  //   containerTasks.appendChild(liTask);
  listOfTasks.appendChild(liTask);
  inputField.value = "";

  deleteBtn.addEventListener("click", function () {
    listOfTasks.removeChild(liTask);
  });

  liTask.addEventListener("click", function () {
    liTask.style.textDecoration = "line-through";
    liTask.style.color = "#252729";
  });
});

// Navigation Bar
var navbar = document.createElement("NAV");
var titleNav = document.createElement("div");

navbar.appendChild(titleNav);
