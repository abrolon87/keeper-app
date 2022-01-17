import React, { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Fab } from "@mui/material";
import Zoom from '@mui/material/Zoom';
const CreateArea = (props) => {

    const [isExpanded, setExpanded] = useState(false);

    const [note, setNote] = useState({
        title: "",
        content: ""
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        
        setNote(prevNote => {
            return {
                ...prevNote,
                [name]: value
            }
        })
    }

    const handleSubmit = (event) => {
        props.onAdd(note)
        setNote({
            title: "",
            content: ""
        })
        event.preventDefault();
    }

    const expand = () => {
        setExpanded(true);
    }

  return (
    <div>
      <form className="create-note">
          {isExpanded ? <input name="title" value={note.title} onChange={handleChange} placeholder="Title" /> : null}
   
        <textarea name="content" onClick={expand} value={note.content} onChange={handleChange} placeholder="Take a note..." rows={isExpanded ? 3 : 1} />
        <Zoom in={isExpanded}>

        <Fab onClick={handleSubmit}><AddIcon /></Fab> 
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
