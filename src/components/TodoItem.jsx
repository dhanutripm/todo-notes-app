
function TodoItem({
  task,
  editingId,
  editText,
  editDate,
  setEditText,
  setEditDate,
  toggleTask,
  startEditing,
  saveEdit,
  deleteTask
}) {
  return (
    <div className="todo-item">

      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTask(task.id)}
      />

      {editingId === task.id ? (
        <div className="edit-form">

          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
          />

          <input
            type="date"
            value={editDate}
            onChange={(e) => setEditDate(e.target.value)}
          />

          <button
            className="save-btn"
            onClick={() => saveEdit(task.id)}
            type="button"
          >
            Save
          </button>

        </div>
      ) : (
        <div className="todo-details">

          <h3 className={task.completed ? "completed" : ""}>
            {task.text}
          </h3>

          {task.dueDate && <p>Due date: {task.dueDate}</p>}

          <p className={`todo-status ${task.completed ? "done" : "pending"}`}>
            {task.completed ? "Completed" : "Pending"}
          </p>

        </div>
      )}

      {editingId !== task.id && (
        <div className="todo-actions">

          <button
            className="edit-btn"
            onClick={() => startEditing(task)}
            type="button"
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={() => deleteTask(task.id)}
            type="button"
          >
            Delete
          </button>

        </div>
      )}

    </div>
  );
}

export default TodoItem;
