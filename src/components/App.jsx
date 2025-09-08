import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [Notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(Notes));
  }, [Notes]);

  function addNote(note) {
    setNotes((previous) => [...previous, note]);
  }

  function deleteNote(id) {
    setNotes((previous) => previous.filter((element, index) => index !== id));
  }

  return (
    <div>
      <Header />
      <CreateArea add={addNote} />
      {Notes.map((element, index) => (
        <Note
          key={index}
          id={index}
          title={element.title}
          content={element.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
