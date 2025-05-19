import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const NoteInput = ({ onAdd }) => {
    const [note, setNote] = useState("");

    const handleSubmit = () => {
        if (note.trim()) {
            onAdd(note.trim());
            setNote("");
        }
    };

    return (
        <div className="note-input">
            <input
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="New Note..."
            />
            <button onClick={handleSubmit}>
                <FaPlusCircle />
                Add
            </button>
        </div>
    );
};

export default NoteInput;
