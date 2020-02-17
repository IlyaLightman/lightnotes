import React from 'react'
import './NoteCreator.scss'
import Input from '../../components/UI/Input/Input'

class NoteCreator extends React.Component {
    render() {
        return (
            <div>
                <h2>Note Creator</h2>
                <Input 
                    title='Введите что-нибудь'
                />
            </div>
        )
    }
}

export default NoteCreator