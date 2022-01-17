import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import Note from './Note'
import notes from '../notes'
import CreateArea from './CreateArea';



const App = () => {

  const [notes, setNotes] = useState(
    []
  )

  const addNote = (newNote) => {
    
    setNotes(prevNotes => {
      return [...prevNotes, newNote]
    })
  }

  const deleteNote = (id) => {
    setNotes(prevNotes => {
      prevNotes.filter((note, i) => {
        return i !== id;
      })
    })
  }
    return (<div>
              <Header />
              <CreateArea onAdd={addNote} />
              {notes.map((note, i) => {
              return <Note key={i} id={i} title={note.title} content={note.content} onDelete={deleteNote}
              />
              })}
              
   <Note key={1} title="Note title" content="Note content"/>

  
  <Footer />
    </div>
    )
};

export default App;