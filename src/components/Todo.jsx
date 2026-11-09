
import { useState, useEffect } from "react";
import "../styles/Todo.css";
import TodoItem from "./TodoItem";

function Todo() {

  // Load saved tasks from Local Storage
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("myTasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Input states
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  // Filter state
  const [filter, setFilter] = useState("All");

  // Edit states
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");
  const [editDate, setEditDate] = useState("");

  // Save tasks whenever they change
  useEffect(() => {
    localStorage.setItem("myTasks", JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (e) => {
    e.preventDefault();

    if (taskInput.trim() === "") {
      alert("Please enter a task!");
      return;
    }

    const newTask = {
      id: Date.now(),
      text: taskInput.trim(),
      completed: false,
      dueDate: dueDate
    };

    setTasks([...tasks, newTask]);

    setTaskInput("");
    setDueDate("");
  };

  // Mark task as completed or pending
  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  // Delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Start editing a task
  const startEditing = (task) => {
    setEditingId(task.id);
    setEditText(task.text);
    setEditDate(task.dueDate);
  };

  // Save edited task
  const saveEdit = (id) => {
    if (editText.trim() === "") {
      alert("Task cannot be empty!");
      return;
    }

    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              text: editText.trim(),
              dueDate: editDate
            }
          : task
      )
    );

    setEditingId(null);
    setEditText("");
    setEditDate("");
  };

  // Filter tasks
  const filteredTasks = tasks.filter((task) => {
    if (filter === "Completed") return task.completed;
    if (filter === "Pending") return !task.completed;
    return true;
  });

  // Task Summary
  const totalTasks = tasks.length;

  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  const pendingTasks = totalTasks - completedTasks;

  const progress = totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

  return (
    <div className="todo-container">

      <h2>My To-Do List</h2>

      {/* Add Task Form */}
      <form className="todo-form" onSubmit={addTask}>

        <input
          type="text"
          placeholder="Enter your task..."
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
        />

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />

        <button type="submit">+ Add Task</button>

      </form>

      {/* Task Filters */}
      <div className="todo-filters">

        {["All", "Pending", "Completed"].map((item) => (
          <button
            key={item}
            className={filter === item ? "active" : ""}
            onClick={() => setFilter(item)}
            type="button"
          >
            {item}
          </button>
        ))}

      </div>

      {/* Task Summary */}
      <div className="task-summary">

        <div className="summary-card total">
          <h3>{totalTasks.toString().padStart(2, "0")}</h3>
          <p>All Tasks</p>
        </div>

        <div className="summary-card pending">
          <h3>{pendingTasks.toString().padStart(2, "0")}</h3>
          <p>Pending</p>
        </div>

        <div className="summary-card completed">
          <h3>{completedTasks.toString().padStart(2, "0")}</h3>
          <p>Completed</p>
        </div>

      </div>

      {/* Task Progress */}
      <div className="task-progress">

        <div className="progress-heading">
          <h3>Task Progress</h3>
          <span>{progress}%</span>
        </div>

        <p>
          {completedTasks} of {totalTasks} tasks completed
        </p>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        <small>Your productivity at a glance!</small>

      </div>

      {/* Task List */}
      <div className="todo-list">

        {filteredTasks.length === 0 ? (
          <p className="empty-message">
            No tasks found. Add a new task!
          </p>
        ) : (

          filteredTasks.map((task) => (
            <TodoItem
              key={task.id}
              task={task}
              editingId={editingId}
              editText={editText}
              editDate={editDate}
              setEditText={setEditText}
              setEditDate={setEditDate}
              toggleTask={toggleTask}
              startEditing={startEditing}
              saveEdit={saveEdit}
              deleteTask={deleteTask}
            />
          ))

        )}

      </div>

    </div>
  );
}

export default Todo;
