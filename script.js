document.addEventListener("DOMContentLoaded", function () {
    const inputBox = document.getElementById("input-box");
    const addButton = document.querySelector(".AddTask");
    const taskList = document.getElementById("task-list");
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // Function to add a new task
    function addTask() {
      const taskText = inputBox.value.trim();
      if (taskText === "") return; // Prevent empty tasks
  
      // Create task container
      const taskItem = document.createElement("li");
      taskItem.classList.add("task-item");
  
      // Create checkbox
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.classList.add("task-checkbox");
  
      // Create task text
      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      taskSpan.classList.add("task-text");
  
      // Create delete button
      const deleteButton = document.createElement("button");
      deleteButton.innerHTML = "❌";
      deleteButton.classList.add("delete-task");
  
      // Add event listener for checkbox
      checkbox.addEventListener("change", function () {
        taskSpan.classList.toggle("completed", checkbox.checked);
      });
  
      // Add event listener for delete button
      deleteButton.addEventListener("click", function () {
        taskItem.remove();
      });
  
      // Append elements to task item
      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskSpan);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
  
      // Clear input field after adding task
      inputBox.value = "";
    }
  
    // Event listener for add button
    addButton.addEventListener("click", addTask);
  
    // Event listener for Enter key inside input box
    inputBox.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        addTask();
      }
    });
  
    // Theme Toggle Functionality
    themeToggle.addEventListener("click", function () {
      body.classList.toggle("dark-mode");
  
      // Toggle between sun and moon icons
      if (body.classList.contains("dark-mode")) {
        themeToggle.textContent = "🌞";
      } else {
        themeToggle.textContent = "🌙";
      }
    });
  });
  