import {EDIT_COLUMNS, CREATE_NOTE, LOAD_NOTES_SUCCESS, LOAD_NOTES_START} from './actionTypes'
import axios from 'axios'
import { baseURL } from '../../axios/axios-quiz'

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
    await axios.post(`${baseURL}/users/${account}/notes.json`, note)
}

export function loadNotes (account) {
    return async dispatch => {
        dispatch(loadNotesStart())

        const response = await axios.get(
            `${baseURL}/users/${account}/notes.json`
        )

        const notes = []

        Object.values(response.data).forEach((note) => {
            notes.push({
                title: note.title,
                text: note.text,
                logo: note.logo,
                color: note.color,
                hoverColor: note.hoverColor
            })
        })

        dispatch(loadNotesSuccess(notes))
    }
}

export function loadNotesSuccess(notes) {
    return {
        type: LOAD_NOTES_SUCCESS,
        notes
    }
}

export function loadNotesStart() {
    return {
        type: LOAD_NOTES_START,
    }
}