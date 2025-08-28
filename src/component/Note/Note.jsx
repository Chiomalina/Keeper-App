import React from 'react'
import "./Note.css"

function Note(props) {

  function handleClick() {
    props.onDelete(props.id);

  }

  return (
    <div className='note'>
        <h1>{props.Num}. {props.title}</h1>
        <p>{props.content}</p>
        <button onClick={handleClick}>DELETE</button>
    </div>
  )
}

export default Note
