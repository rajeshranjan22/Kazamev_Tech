const NoteList = ({ notes }) => (
    <div className="note-list">
        <strong>Notes</strong>
        <div className="notes-scroll">
            {notes.length > 0 ? notes.map((note, idx) => (
                <div className="note-item" key={idx}>{note}</div>
            )) : <p style={{ opacity: 0.6 }}>No notes yet.</p>}
        </div>
    </div>
);

export default NoteList;
