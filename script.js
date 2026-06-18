// Get buttons and modal elements - Alok
const addBtn = document.getElementById("addBtn");
const filterBtn = document.getElementById("filterBtn");

const taskModal = document.getElementById("taskModal");
const filterModal = document.getElementById("filterModal");

const taskInput = document.getElementById("taskInput");
const searchInput = document.getElementById("searchInput");




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

// Close Search Modal
closeFilterBtn.onclick = () => {
    filterModal.style.display = "none";
};
