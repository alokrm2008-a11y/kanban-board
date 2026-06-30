# kanban-board
2nd-Sem-Project

# 📋 Kanban Task Board

A simple, clean drag-and-drop Kanban board built with vanilla HTML, CSS, and JavaScript — no frameworks, no dependencies.

🔗 **Live Demo:** [kanban-board-pi-coral.vercel.app](https://kanban-board-pi-coral.vercel.app)

![Status](https://img.shields.io/badge/status-active-success)
![Made with](https://img.shields.io/badge/made%20with-HTML%20%7C%20CSS%20%7C%20JS-blueviolet)

---

## ✨ Features

- ➕ **Add tasks** via a simple modal
- ✏️ **Edit** existing tasks inline
- 🗑️ **Delete** tasks you no longer need
- 🔄 **Drag and drop** tasks between **To Do**, **In Progress**, and **Done**
- 🔍 **Search/filter** tasks by name with instant highlighting
- 🔢 **Live task counters** for each column
- 💾 **Persistent storage** using `localStorage` — your board stays intact on refresh
- 📱 **Responsive design** for mobile and desktop

---

## 🖥️ Tech Stack

| Layer | Tech |
|-------|------|
| Structure | HTML5 |
| Styling | CSS3 (Flexbox, custom properties, media queries) |
| Logic | Vanilla JavaScript (DOM, Drag & Drop API, localStorage) |

---

## 📁 Project Structure

```
kanban-board/
├── index.html      # Page structure & modals
├── style.css        # Styling and layout
├── script.js         # App logic (CRUD, drag-drop, search)
└── README.md
```

---

## 🚀 Getting Started

No build tools or installs needed — it's plain HTML/CSS/JS.

1. Clone the repo
   ```bash
   git clone https://github.com/alokrm2008-a11y/kanban-board.git
   ```
2. Open `index.html` in your browser

That's it. 🎉

---

## 🛠️ How It Works

- Click **+ Add Task** to create a new task card.
- Click **Edit** on a card to update its title.
- Click **Delete** to remove a card.
- **Drag** any card into another column to change its status.
- Click **🔍 Filter** to search for a task by name — matching cards get highlighted.

Tasks are saved to your browser's `localStorage`, so your board persists across sessions.

---

## 🤝 Contributors

This project was built collaboratively as a 2nd Semester project.

| Contributor | Area |
|-------------|------|
| Alok | HTML structure, responsive design |
| Bhagya | Page styling, localStorage setup |
| Abhishek | Header layout |
| Disha | Buttons, modal interactions, drag & drop |
| Uttkarsh | Save/update logic, modal styling, task counts |
| Sahil | Task rendering, search functionality |

---

## 📄 License

This project is open source and available for educational use.
