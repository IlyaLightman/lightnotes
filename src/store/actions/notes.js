import {EDIT_COLUMNS, CREATE_NOTE} from './actionTypes'
import axios from 'axios'

export function editColumns (columns) {
    return {
        type: EDIT_COLUMNS,
        columns
    }
}

export function createNote (note) {
    noteToDatabase('I1Y4L1GH7M4N', note)

    return {
        type: CREATE_NOTE,
        note
    }
}

async function noteToDatabase (account, note) {
    await axios.post(`https://react-notes-fc95f.firebaseio.com/users/${account}/notes.json`, note)
}