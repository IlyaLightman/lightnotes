import React, {Component} from 'react'
import './Notes.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import NoteBlock from '../../components/NoteBlock/NoteBlock'

class Notes extends Component {
    render() {
        console.log(this.props)

        return (
            <div>
                <h2>Заметочки: </h2>
                <h3> { this.props.notes[0].title } </h3>
                <p> {this.props.notes[0].text} </p>
                <NoteBlock 
                    background = 'lightyellow'
                    note = {this.props.notes[0]}
                />

            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log(state)

    return {
        notes: state.notes.notes
    }
}

function mapDispatchToProps(dispatch) {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Notes))