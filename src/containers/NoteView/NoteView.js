import React from 'react'
import { connect } from 'react-redux'

const NoteView = props => {
    return (
        <div>
            <h1>{props.notes[props.noteId].title}</h1>
            <h2>{props.notes[props.noteId].text}</h2>
            <h3>{props.notes[props.noteId].logo}</h3>
        </div>
    )
} // Ещё шоб стрелочки тудой сюдой смотреть соседние заметки

function mapStateToProps(state) {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(NoteView)