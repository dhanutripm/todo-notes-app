
function NoteItem({ note, editNote, deleteNote }) {

  return (
    <div className="note-card">

      <h3>{note.title}</h3>

      <span className="note-category">
        {note.category}
      </span>

      <p>{note.content}</p>

      <div className="note-time">
        Created: {note.createdAt}
        <br />
        Updated: {note.updatedAt}
      </div>

      <div className="note-actions">

        <button
          className="note-edit"
          type="button"
          onClick={() => editNote(note.id)}
        >
          Edit
        </button>

        <button
          className="note-delete"
          type="button"
          onClick={() => deleteNote(note.id)}
        >
          Delete
        </button>

      </div>

    </div>
  );
}

export default NoteItem;
