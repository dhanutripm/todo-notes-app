# 📝 To-Do List & Notes App

A responsive productivity web application built using **React.js** that combines a To-Do List and Notes App in one place. It helps users manage daily tasks, track progress, and organize important notes efficiently.

## 🌟 Project Overview

The To-Do List and Notes App is designed to improve productivity by providing two essential tools in a single application.

Users can create and manage tasks, mark them as completed, set due dates, and track their progress. They can also create, edit, delete, search, and organize notes using different categories.

The application uses browser Local Storage to save tasks and notes, allowing data to remain available even after refreshing the page.

## ✨ Features

### 1. To-Do List

- Add new tasks.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or pending.
- Set due dates for tasks.
- Filter tasks by All, Pending, and Completed.
- View total, completed, and pending task counts.
- Track task completion using a progress bar.
- Automatically save tasks using Local Storage.

### 2. Notes App

- Create new notes with titles and descriptions.
- Edit existing notes.
- Delete unwanted notes.
- Search notes by title or content.
- Organize notes into categories:
  - Personal
  - Study
  - Work
  - Ideas
- Display creation and last-updated timestamps.
- Automatically save notes using Local Storage.

### 3. User Interface

- Clean and modern design.
- Responsive layout for desktop, tablet, and mobile devices.
- Organized To-Do and Notes sections.
- Simple and user-friendly interface.
- Reusable React components.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Application structure |
| CSS3 | Styling and responsive design |
| JavaScript (ES6+) | Application logic |
| React.js | Frontend development |
| Vite | Development server and build tool |
| Local Storage | Saving tasks and notes |
| Git & GitHub | Version control and project hosting |

## 📂 Project Structure

```text
todo-notes-app/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Todo.jsx
│   │   ├── TodoItem.jsx
│   │   ├── Notes.jsx
│   │   └── NoteItem.jsx
│   │
│   ├── styles/
│   │   ├── Todo.css
│   │   └── Notes.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── index.css
│   └── main.jsx
│
├── index.html
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── vite.config.js
```

## ⚙️ Installation and Setup

Follow these steps to run the project locally.

### Prerequisites

- Node.js installed
- npm installed
- Visual Studio Code (recommended)

### Step 1: Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### Step 2: Navigate to the Project Folder

```bash
cd todo-notes-app
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start the Development Server

```bash
npm run dev
```

### Step 5: Open the Application

Open the local URL displayed in your terminal, usually:

```text
http://localhost:5173/
```

## 📦 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the development server |
| `npm run build` | Creates an optimized production build |
| `npm run preview` | Previews the production build |
| `npm run lint` | Checks code using ESLint |

## 🧠 React Concepts Implemented

This project demonstrates the use of important React concepts:

- Functional Components
- JSX
- React Hooks (`useState` and `useEffect`)
- Props and Component Reusability
- Event Handling
- Conditional Rendering
- Rendering Lists using `.map()`
- Array Methods (`filter()` and `find()`)
- JavaScript Arrow Functions
- Template Literals
- Spread Operator
- Object Manipulation
- Local Storage Integration

## 💾 Data Storage

The application uses the browser's Local Storage to store task and note information.

- Tasks are stored using the key `myTasks`.
- Notes are stored using the key `myNotes`.

This allows the application to retain saved data when the browser page is refreshed.

**Note:** Data is stored locally in the browser and is not synchronized between different devices or browsers.

## 🎯 Project Objectives

- To develop a practical productivity application using React.js.
- To understand component-based application development.
- To implement state management using React Hooks.
- To practice JavaScript array and object manipulation.
- To understand browser Local Storage.
- To create a responsive and user-friendly interface.
- To gain hands-on experience with Git and GitHub.

## 🚀 Future Enhancements

- User authentication and individual accounts.
- Cloud-based data synchronization.
- Dark mode.
- Task priority levels.
- Reminder notifications.
- Export notes as PDF.
- Calendar-based task management.

## 👩‍💻 Developed By

**Project:** To-Do List & Notes App  
**Technology:** React.js  
**Project Type:** Web Development Minor Project

---

⭐ If you find this project useful, feel free to explore and improve it!


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
