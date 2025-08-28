import React from 'react';
import { RiDeleteBin4Fill } from "react-icons/ri";
import "./Note.css"

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);

  }

  return (
    <div className='note'>
        <h1>{props.Num}. {props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}><RiDeleteBin4Fill size={30}/></button>
    </div>
  )
}

export default Note
