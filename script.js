 // JavaScript Logic for To-Do List
 document.getElementById("addTaskBtn").addEventListener("click", addTask);

 function addTask() {
   const taskInput = document.getElementById("taskInput");
   const taskList = document.getElementById("taskList");
   const taskText = taskInput.value.trim();

   if (taskText === "") {
     alert("Please enter a task!");
     return;
   }

   // Create Task Element
   const taskItem = document.createElement("li");
   taskItem.className = "flex justify-between items-center bg-gray-100 p-2 rounded-md shadow";

   // Task Text
   const taskLabel = document.createElement("label");
   taskLabel.className = "flex items-center space-x-3";
   const taskCheckbox = document.createElement("input");
   taskCheckbox.type = "checkbox";
   taskCheckbox.className = "h-4 w-4 text-red-500 border-gray-300 focus:ring-red-500 rounded";
   taskCheckbox.addEventListener("change", () => {
     taskTextElement.classList.toggle("line-through");
     taskTextElement.classList.toggle("text-gray-400");
   });
   const taskTextElement = document.createElement("span");
   taskTextElement.textContent = taskText;
   taskLabel.appendChild(taskCheckbox);
   taskLabel.appendChild(taskTextElement);

   // Delete Button
   const deleteBtn = document.createElement("button");
   deleteBtn.textContent = "✖";
   deleteBtn.className = "text-red-500 hover:text-red-700";
   deleteBtn.addEventListener("click", () => {
     taskList.removeChild(taskItem);
   });

   taskItem.appendChild(taskLabel);
   taskItem.appendChild(deleteBtn);

   // Add Task to List
   taskList.appendChild(taskItem);

   // Clear Input Field
   taskInput.value = "";
 }