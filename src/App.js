import React, { useState } from 'react';
import Header from './component/Header'; // Adjust path as necessary
import Note from './component/Note'; // Adjust path as necessary
import Footer from './component/Footer'; // Adjust path as necessary
import Createarea from './component/Createarea'; // Adjust path as necessary

function App() {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes(prevNotes => [...prevNotes, newNote]);
  }

  return (
    <div>
      
      <Header />
      <Createarea onadd={addNote} />
      {notes.map((noteItem, index) => (
        <Note key={index} title={noteItem.title} content={noteItem.content} />
      ))}
      <Footer />
    </div>
  );
}

export default App;
