import {EDIT_COLUMNS} from './actionTypes'

export function editColumns (columns) {
    return {
        type: EDIT_COLUMNS,
        columns
    }
}