import React from 'react'
import { connect } from 'react-redux'

class NoteView extends React.Component {
    state = {
        currNoteId: this.props.noteId
    }

    render() {
        const note = this.props.notes[this.state.currNoteId]

        return (
            <div>
                <h1>{note.title}</h1>
                <h2>{note.text}</h2>
                <h3>{note.logo}</h3>

                <button onClick={() =>
                    this.setState({currNoteId: this.state.currNoteId + 1})}>next</button>
                <button onClick={() => this.props.backFunc()}>back</button>
            </div>
        )
    }
} // Ещё шоб стрелочки тудой сюдой смотреть соседние заметки

function mapStateToProps(state) {
    return {
        notes: state.notes.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // TODO Тут короче можно будет удалить заметочку
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NoteView)