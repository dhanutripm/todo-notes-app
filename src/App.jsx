
import Todo from "./components/Todo";
import Notes from "./components/Notes";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>My Productivity Space</h1>
        <p>Organize your tasks and ideas in one place.</p>
      </header>

      <main className="app-content">
        <section className="app-section">
          <Todo />
        </section>

        <section className="app-section">
          <Notes />
        </section>
      </main>
    </div>
  );
}

export default App;
