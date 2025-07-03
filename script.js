document.addEventListener("DOMContentLoaded", () => {
  const taskForm = document.getElementById("task-form");
  const taskInput = document.getElementById("task-input");
  const taskList = document.getElementById("task-list");

  // Load tasks from localStorage
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  function renderTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
      const li = document.createElement("li");
      li.textContent = task.text;
      if (task.completed) li.classList.add("completed");

      // Toggle complete
      li.addEventListener("click", () => {
        task.completed = !task.completed;
        saveTasks();
        renderTasks();
      });

      // Delete button
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Delete";
      deleteBtn.className = "delete-btn";
      deleteBtn.onclick = () => {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
      };

      li.appendChild(deleteBtn);
      taskList.appendChild(li);
    });
  }

  // Add new task
  taskForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const text = taskInput.value.trim();
    if (text !== "") {
      tasks.push({ text, completed: false });
      saveTasks();
      renderTasks();
      taskInput.value = "";
    }
  });

  // Initial render
  renderTasks();
});