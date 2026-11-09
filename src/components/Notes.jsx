
import { useState, useEffect } from "react";
import "../styles/Notes.css";
import NoteItem from "./NoteItem";

function Notes() {

  // Load notes from Local Storage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("myNotes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  // Input states
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  // Search and category filter
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Edit state
  const [editingId, setEditingId] = useState(null);

  // Save notes whenever notes change
  useEffect(() => {
    localStorage.setItem("myNotes", JSON.stringify(notes));
  }, [notes]);

  // Create or update a note
  const handleSubmit = (e) => {
    e.preventDefault();

    if (title.trim() === "" || content.trim() === "") {
      alert("Please enter both title and note content!");
      return;
    }

    if (editingId !== null) {
      setNotes(
        notes.map((note) =>
          note.id === editingId
            ? {
                ...note,
                title: title.trim(),
                content: content.trim(),
                category: category,
                updatedAt: new Date().toLocaleString()
              }
            : note
        )
      );
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        category: category,
        createdAt: new Date().toLocaleString(),
        updatedAt: new Date().toLocaleString()
      };

      setNotes([...notes, newNote]);
    }

    clearForm();
  };

  // Clear input fields
  const clearForm = () => {
    setTitle("");
    setContent("");
    setCategory("Personal");
    setEditingId(null);
  };

  // Find and edit a note
  const editNote = (id) => {
    const selectedNote = notes.find((note) => note.id === id);

    if (selectedNote) {
      setTitle(selectedNote.title);
      setContent(selectedNote.content);
      setCategory(selectedNote.category);
      setEditingId(id);
    }
  };

  // Delete a note
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));

    if (editingId === id) {
      clearForm();
    }
  };

  // Search and filter notes
  const filteredNotes = notes.filter((note) => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase()) ||
      note.content.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" ||
      note.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="notes-container">

      <h2>My Notes</h2>

      {/* Create and Edit Note Form */}
      <form className="note-form" onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter note title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          placeholder="Write your note here..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
          <option value="Work">Work</option>
          <option value="Ideas">Ideas</option>
        </select>

        <button type="submit">
          {editingId !== null ? "Update Note" : "+ Create Note"}
        </button>

        {editingId !== null && (
          <button type="button" onClick={clearForm}>
            Cancel Editing
          </button>
        )}

      </form>

      {/* Search Notes */}
      <div className="note-search">
        <input
          type="text"
          placeholder="Search your notes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Category Filters */}
      <div className="note-filters">

        {["All", "Personal", "Study", "Work", "Ideas"].map((item) => (
          <button
            key={item}
            type="button"
            className={selectedCategory === item ? "active" : ""}
            onClick={() => setSelectedCategory(item)}
          >
            {item}
          </button>
        ))}

      </div>

      {/* Display Notes */}
      <div className="notes-grid">

        {filteredNotes.length === 0 ? (
          <p className="no-notes">
            No notes found. Create your first note!
          </p>
        ) : (
          filteredNotes.map((note) => (
            <NoteItem
              key={note.id}
              note={note}
              editNote={editNote}
              deleteNote={deleteNote}
            />
          ))
        )}

      </div>

    </div>
  );
}

export default Notes;
