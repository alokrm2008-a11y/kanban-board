// Get buttons and modal elements - Alok
const addBtn = document.getElementById("addBtn");
const filterBtn = document.getElementById("filterBtn");

const taskModal = document.getElementById("taskModal");
const filterModal = document.getElementById("filterModal");

const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");

// Load tasks from local storage - Bhagya
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
let editId = null;


// Open Add Task Modal -
addBtn.onclick = () => {
    taskModal.style.display = "flex";
    taskInput.focus();
};

// Open Search Modal
filterBtn.onclick = () => {
    filterModal.style.display = "flex";
    searchInput.focus();
};



cancelBtn.onclick = () => {
    taskModal.style.display = "none";
    taskInput.value = "";
    editId = null;
};

// Save New Task or Update Existing Task - Uttkarsh
saveBtn.onclick = () => {

    const title = taskInput.value.trim();

    if(!title){
        alert("Enter task name");
        return;
    }

    if(editId){

        tasks.find(t => t.id === editId).title = title;
        editId = null;

    }else{

        tasks.push({
            id: Date.now().toString(),
            title,
            status:"todo"
        });
    }

    localStorage.setItem("tasks", JSON.stringify(tasks));

    taskInput.value = "";
    taskModal.style.display = "none";

    renderTasks();
};

// Close Search Modal
closeFilterBtn.onclick = () => {
    filterModal.style.display = "none";
};
// Add Task on Enter Key - Disha
taskInput.addEventListener("keydown", e => {
    if(e.key === "Enter") saveBtn.click();
});
// Search Task on Enter Key - Disha*/
searchInput.addEventListener("keydown", e => {
    if(e.key === "Enter") searchBtn.click();
});

// Display All Tasks - Sahil
function renderTasks(){

    todo.innerHTML = "";
    progress.innerHTML = "";
    done.innerHTML = "";

    tasks.forEach(task => {

        const card = document.createElement("div");

        card.className = "task";
        card.draggable = true;
        card.dataset.title = task.title.toLowerCase();

        card.innerHTML = `
            <h3>${task.title}</h3>
            <div class="actions">
                <span class="edit">Edit</span>
                <span class="delete">Delete</span>
            </div>
        `;

        // Edit Task
        card.querySelector(".edit").onclick = () => {

            taskInput.value = task.title;
            editId = task.id;

            taskModal.style.display = "flex";
            taskInput.focus();
        };

        // Delete Task
        card.querySelector(".delete").onclick = () => {

            tasks = tasks.filter(t => t.id !== task.id);

            localStorage.setItem(
                "tasks",
                JSON.stringify(tasks)
            );

            renderTasks();
        };

	// Drag Task
        card.addEventListener("dragstart", e => {
            e.dataTransfer.setData("id", task.id);
        });

        document
            .getElementById(task.status)
            .appendChild(card);
    });
// Update Task Counts - Uttkarsh
    todoCount.textContent =
        tasks.filter(t => t.status === "todo").length;

    progressCount.textContent =
        tasks.filter(t => t.status === "progress").length;

    doneCount.textContent =
        tasks.filter(t => t.status === "done").length;
}
// Drag and Drop Functionality - Disha*/
document.querySelectorAll(".task-list")
.forEach(column => {

    column.addEventListener("dragover", e =>
        e.preventDefault()
    );

    column.addEventListener("drop", e => {

        e.preventDefault();

        const id =
            e.dataTransfer.getData("id");

        tasks.find(t => t.id === id)
            .status = column.id;

        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );

        renderTasks();
    });
});
