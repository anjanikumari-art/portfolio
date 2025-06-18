function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();
  if (task === "") {
    alert("Please enter a task.");
    return;
  }

  let list = document.getElementById("taskList");
  let listItem = document.createElement("li");
  listItem.textContent = task;

  // Click to remove task
  listItem.onclick = function () {
    list.removeChild(listItem);
  };

  list.appendChild(listItem);
  taskInput.value = "";
}
