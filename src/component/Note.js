import React from "react";
import "../styles/note.css"; // Adjust the path if necessary

function Note({ title, content }) {
    return (
        <div className="note">
            <ul>
            <h1>{title}</h1>
            <p><li>{content}</li></p>
            </ul>
        </div>
       
    );
}

export default Note