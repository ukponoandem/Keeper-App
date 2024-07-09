import React, { useState } from "react";
import "../styles/Createarea.css"; // Adjust the path as necessary

function Createarea(props) {
  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote(prevNote => ({
      ...prevNote,
      [name]: value
    }));
  }

  function submitNote(event) {
    props.onadd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault(); // Prevent form submission and page refresh
  }

  return (
    <div className="form-container">
      <form>
        <div className="input-group">
          <input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Title"
          />
        </div>
        <div className="input-group">
          <textarea
            name="content"
            onChange={handleChange}
            value={note.content}
            placeholder="Take a note.."
            rows="2"
            column="2"
          />
        </div>
        <div className="input-group">
          <button type="button" onClick={submitNote}>Add</button>
        </div>
      </form>
    </div>
  );
}

export default Createarea;