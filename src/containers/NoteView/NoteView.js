import React from 'react'
import './NoteView.scss'
import { connect } from 'react-redux'

class NoteView extends React.Component {
    state = {
        currNoteId: this.props.noteId
    }

    render() {
        const note = this.props.notes[this.state.currNoteId]

        return (
            <div className='NoteView'>
                
                <div className='Note'>
                    <div>
                        <h1>{note.title}</h1>
                        <p>{note.text}</p>
                    </div>

                    <div>
                        <i style={{ fontSize: 25 }} className={note.logo}></i>
                    </div>

                    
                </div>
                <div className='Buttons'>
                    <button onClick={() => {
                        let currId = this.state.currNoteId - 1
                        currId >= 0 ?
                        this.setState({currNoteId: this.state.currNoteId - 1}) :
                        this.setState({currNoteId: this.props.notes.length - 1})
                    }}>Prev</button>

                    <button onClick={() => this.props.backFunc()}>Back</button>

                    <button onClick={() => {
                        let currId = this.state.currNoteId + 1
                        this.props.notes.length > currId ?
                        this.setState({currNoteId: currId}) :
                        this.setState({currNoteId: 0})
                    }}>Next</button>
                </div>
                
                
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