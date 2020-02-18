import React from 'react'
import { connect } from 'react-redux'

const NoteView = props => {
    return (
        <div>
            <h1>{props.notes[0].title}</h1>
            <h1>{props.notes[1].title}</h1>
            <h1>{props.notes[2].title}</h1>
        </div>
    )
} // Ещё шоб стрелочки тудой сюдой смотреть соседние заметки

function mapStateToProps(state) {
    return {
        notes: state.notes.notes
    }
}

export default connect(mapStateToProps)(NoteView)