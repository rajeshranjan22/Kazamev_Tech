import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import NoteInput from "./components/NoteInput";
import NoteList from "./components/NoteList";
import { addTask, fetchAllTasks } from "./api";

const App = () => {
  const [notes, setNotes] = useState([]);

  const loadNotes = async () => {
    const data = await fetchAllTasks();
    setNotes(data);
  };

  const handleAddNote = async (newNote) => {
    await addTask(newNote);
    await loadNotes();
  };

  useEffect(() => {
    loadNotes();
  }, []);

  return (
    <div className="app-container">
      <div className="note-box">
        <Header />
        <NoteInput onAdd={handleAddNote} />
        <NoteList notes={notes} />
      </div>
    </div>
  );
};

export default App;
