import React from 'react'
import './NoteBlock.scss'
import Radium from 'radium'

let baseStyle = {
  background: 'white',

  ':hover': {
    background: 'lightgreen'
  }
};

const NoteBlock = props => {
  if (props.note.background) {
      baseStyle.background = props.note.background
  }

  if (props.note.hoverBackground) {
      baseStyle[":hover"].background = props.note.hoverBackground
  }

  return (
    <div>
      <div style={baseStyle} key={'1'}
           className='NoteBlock'>
        <h2>{props.note.title}</h2>
        <p>
          {props.note.text}
        </p>
      </div>
    </div>
  );
};

export default Radium(NoteBlock);