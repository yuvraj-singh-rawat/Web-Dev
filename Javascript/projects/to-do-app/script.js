const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

// Load tasks from localStorage
window.onload = () => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    savedTasks.forEach(task => renderTask(task.text, task.completed));
};

addBtn.addEventListener("click", () => {
    const taskText = input.value.trim();
    if (taskText === "") return;

    renderTask(taskText, false);
    saveTasks(); // Save to localStorage
    input.value = "";
});

function renderTask(text, isCompleted) {
    const li = document.createElement("li");
    li.textContent = text;
    if (isCompleted) li.classList.add("completed");

    li.addEventListener("click", () => {
        li.classList.toggle("completed");
        saveTasks();
    });

    const delBtn = document.createElement("button");
    delBtn.textContent = "X";
    delBtn.className = "delete-btn";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        li.remove();
        saveTasks();
    });

    li.appendChild(delBtn);
    list.appendChild(li);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll("#todo-list li").forEach(li => {
        tasks.push({
            text: li.firstChild.textContent,
            completed: li.classList.contains("completed")
        });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
