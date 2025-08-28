import React, { useState } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Note from "./Note/Note"
import CreateArea from "./CreateArea/CreateArea";


function App() {

  const [notes, setNotes] = useState([])

  function addNote(newNotes){
    console.log(newNotes)
    setNotes(prevNotes => {
      return [...prevNotes, newNotes]
    })

  }

  function deleteNote(id) {
    console.log("Delete was triggered")
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;

      })
    })

  }

  return(
    <div>
      <Header />
      <CreateArea onAdd={addNote}/>

      {notes.map((noteItem, index) => {
        return <Note 
        Num={index + 1}
        key={index} 
        id={index}
        title={noteItem.title} 
        content={noteItem.content} 
        onDelete={deleteNote}
        />

      })}
      <Footer />
    </div>
  )
}

export default App