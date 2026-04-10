let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    function saveTasks() {
      localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function renderTasks() {
      const list = document.getElementById("taskList");
      list.innerHTML = "";

      tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.className = task.completed ? "completed" : "";

        li.innerHTML = `
          <span onclick="toggleComplete(${index})">${task.text}</span>
          <div class="actions">
            <button onclick="deleteTask(${index})">X</button>
          </div>
        `;

        list.appendChild(li);
      });
    }

    function addTask() {
      const input = document.getElementById("taskInput");
      const text = input.value.trim();

      if (text === "") return;

      tasks.push({ text, completed: false });
      input.value = "";
      saveTasks();
      renderTasks();
    }

    function deleteTask(index) {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    }

    function toggleComplete(index) {
      tasks[index].completed = !tasks[index].completed;
      saveTasks();
      renderTasks();
    }

    function toggleTheme() {
      document.body.classList.toggle("dark");
      localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
    }

    function loadTheme() {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        document.body.classList.add("dark");
      }
    }

    loadTheme();
    renderTasks();
 
