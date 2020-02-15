import React, {Component} from 'react'
import './Notes.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import NoteBlock from '../../components/NoteBlock/NoteBlock'

class Notes extends Component {
    notesRender = columns => {
        const notes = this.props.notes.map((note, index) => {
            return <NoteBlock 
                        note = {note}
                        key = {index}
                   />
        })

        console.log(columns, notes)

        return (
            <div>
                {notes}
            </div>
        )
    }

    render() {
        console.log(this.props)

        return (
            <div>
                <h2>Заметочки: </h2>
                <h3> { this.props.notes[0].title } </h3>
                <p> { this.props.notes[0].text } </p>
                <NoteBlock
                    background = 'lightyellow'
                    note = {this.props.notes[0]}
                />

                { this.notesRender(this.props.noteColumns) }

            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        notes: state.notes.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Notes))