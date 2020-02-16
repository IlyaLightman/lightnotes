import React, {Component} from 'react'
import './Notes.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import NoteBlock from '../../components/NoteBlock/NoteBlock'

class Notes extends Component {
    notesRender = columns => {
        const rows = Math.ceil(this.props.notes.length / columns)

        const notes = []
        for (let i = 0; i < rows; i++) {
            notes.push([])
        }

        this.props.notes.forEach((note, index) => {
            notes[Math.floor(index / columns)].push(note)
        })

        return (
            notes.map((row, rowIndex) => {
                return (
                    <div 
                        style = {{display: 'flex', flexDirection: 'row'}}
                        key = {`${row}0${rowIndex}`}
                    >
                    {
                        notes[rowIndex].map((note, index) => {
                            const key = `${rowIndex}0${index}`
                            return this.createBlock(note, key)
                        })
                    }
                    </div>
                )
            })
        )
    }

    createBlock = (note, key) => {
        const width = 70 / this.props.noteColumns + 'vw'
        console.log(width)

        return (
            <NoteBlock
                note = {note}
                key = {key}
                width = {width}
            />
        )
    }

    render() {
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
        notes: state.notes.notes,
        noteColumns: state.notes.noteColumns
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Notes))