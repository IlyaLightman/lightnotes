import React, {Component} from 'react'
import './Notes.scss'
import { connect } from 'react-redux'
import Radium from 'radium'
import {NavLink} from 'react-router-dom'
import NoteBlock from '../../components/NoteBlock/NoteBlock'
import { editColumns } from '../../store/actions/notes'

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
                logo = {note.logo}
            />
        )
    }

    render() {
        return (
            <div className='Notes'>
                <div className='menu'>
                    <p style={{margin: '3px 5px 3px 25px'}}>Заметок в строчке: </p>
                    <button 
                        style={{marginLeft: 10}}
                        onClick={() => this.props.editColumns(2)}
                    >2</button>
                    <button 
                        style={{marginLeft: 4}}
                        onClick={() => this.props.editColumns(3)}
                    >3</button>
                    <button 
                        style={{marginLeft: 4}}
                        onClick={() => this.props.editColumns(4)}
                    >4</button>
                </div>
                    <h1>Список дел и заметок</h1>
                    <div className='content'>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}} key='note'>
                            <h2>Заметочки: </h2>
                            <NavLink style={{color: 'gray',
                                        marginLeft: 'auto',
                                        textDecoration: 'none',
                                        fontSize: '25px'}}
                                key='nt'
                                to='/create'
                            >Создать заметку</NavLink>
                        </div>

                        { this.notesRender(this.props.noteColumns) }

                        <div style={{display: 'flex', flexDirection: 'row'}} key='todo'>
                            <h2>TODO: </h2>
                            <NavLink style={{color: 'gray',
                                        marginLeft: 'auto',
                                        textDecoration: 'none',
                                        fontSize: '25px'}}
                                key='nt'
                                to='/'
                            >Новая задача</NavLink>
                        </div>
                </div>
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
        editColumns: columns => dispatch(editColumns(columns))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Radium(Notes))