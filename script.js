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
