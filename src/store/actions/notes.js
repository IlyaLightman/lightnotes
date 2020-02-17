import {EDIT_COLUMNS, CREATE_NOTE} from './actionTypes'

export function editColumns (columns) {
    return {
        type: EDIT_COLUMNS,
        columns
    }
}

export function createNote (note) {
    return {
        type: CREATE_NOTE,
        note
    }
}