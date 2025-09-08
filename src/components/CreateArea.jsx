import React, { useState } from "react";

function CreateArea(props) {
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

function handleSubmit(event) {
            event.preventDefault();
            props.add(note);
            setNote({ title: "", content: "" });
}
  
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "title") {
      setNote((previous) => ({ ...previous, title: value }));
    } else {
      setNote((previous) => ({ ...previous, content: value }));
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={note.title}
          required
        />
        <textarea
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={note.content}
          required
        />
        <button type="submit">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
