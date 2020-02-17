import React from 'react'
import './NoteCreator.scss'
import Input from '../../components/UI/Input/Input'
import Textarea from '../../components/UI/Textarea/Textarea'
import LogoBlock from './LogoBlock/LogoBlock'
import { connect } from 'react-redux'
import { createNote } from '../../store/actions/notes'
import { Redirect } from 'react-router-dom'
import Radium from 'radium'

const logos = [
    'fas fa-chart-line',
    'far fa-grin-beam-sweat',
    'far fa-handshake',
    'far fa-address-book',
    'far fa-trash-alt',
    'far fa-paper-plane',
    'fas fa-code'
]

const colors = [
    'pink',
    'beige',
    'white',
    'lightyellow',
    'lightgray',
    'thistle',
    'linen'
]

class NoteCreator extends React.Component {
    state = {
        touched: false,
        invalid: false,
        title: '',
        text: '',
        tags: 'В разработке :(',
        logo: 'fas fa-exclamation-triangle',
        color: 'white'
    }

    logosRender = () => {
        return logos.map((logo, index) => {
            return (
                <LogoBlock 
                    key={`logo${index}`}
                    logo={logo}
                />
            )
        })
    }

    colorsRender = () => {
        return colors.map((color, index) => {
            return (
                <LogoBlock 
                    key={`logo${index}`}
                    background={color}
                />
            )
        })
    }

    inputChangeHandler = (value, input) => {
        const currNote = { ...this.state }

        currNote.touched = true
        currNote[input] = value

        if (currNote.touched) {
            currNote[input] === ''
            ? currNote.invalid = true
            : currNote.invalid = false
        }

        this.setState({
            ...currNote
        })
    }

    textChangeHandler = (value) => {
        this.setState({
            text: value
        })
    }

    noteCreator = () => {
        if (this.state.title !== '' && this.state.text !== '') {
            const finalNote = { ...this.state}
            this.props.createNote(finalNote)

            this.setState({color: 'go_back'})
        } else {
            if (this.state.text === '') {
                this.setState({
                    text: 'Сюда надо что-то написать',
                    invalid: true,
                    touched: true
                })
            } else {
                this.setState({
                    invalid: true,
                    touched: true
                })
            }
        }
    }

    render() {
        return (
            this.state.color !== 'go_back' ?
            <div className='NoteCreator'>
                <div className='content'>
                    <div style={{
                        display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-between', margin: 0
                    }}>
                        <h2 style={{margin: '10px 0 0 0',
                                    color: 'lightgray'}}>Создайте новую заметку</h2>
                        <h2 style={{margin: '10px 0 0 0',
                                    color: 'gray',
                                    ':hover': {
                                        color: 'black',
                                        cursor: 'pointer'
                                    }}}
                            onClick={() => {this.noteCreator()}}
                        >Готово</h2>
                    </div>
                    
                    <Input 
                        title='Название заметки'
                        invalid={this.state.invalid}
                        value= {this.state.title}
                        onChange={event => 
                            this.inputChangeHandler(event.target.value, 'title')}
                    />

                    <Textarea 
                        title='Заметка'
                        height='4'
                        value={this.state.text}
                        onChange={ event => 
                            this.textChangeHandler(event.target.value)}
                    />

                    <Input
                        title='Теги, через запятую'
                        value={this.state.tags}
                    />

                    <p>Выберите значок для заметки</p>
                    <div style={{
                        width: '90%', display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        
                        { this.logosRender() }

                    </div>

                    <p>Выберите цвет заметки</p>
                    <div style={{
                        width: '90%', display: 'flex', flexDirection: 'row',
                        justifyContent: 'space-between'
                    }}>
                        
                        { this.colorsRender() }

                    </div>
                    
                </div>
            </div> : <Redirect to = {'/notes'}/>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        createNote: note => dispatch(createNote(note))
    }
}

export default connect(null, mapDispatchToProps)(Radium(NoteCreator))