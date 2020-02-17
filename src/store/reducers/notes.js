import { EDIT_COLUMNS, CREATE_NOTE } from "../actions/actionTypes"

const initialState = {
    notes: [
        {
            title: 'Заметка',
            text: 'Текст заметки',
            logo: '', // Значок, ещё будут цвета
            background: 'lightblue',
            hoverBackground: 'cyan'
        },
        {
            title: 'Заметка 2',
            text: 'Заметочка :3',
            logo: '', // Значок, ещё будут цвета
            background: 'pink',
            hoverBackground: 'lightblue'
        },
        {
            title: 'О котиках',
            text: 'Котики милые',
            logo: '', // Значок, ещё будут цвета
            background: 'lightskyblue',
            hoverBackground: 'lightyellow'
        },
        {
            title: 'О собачках',
            text: 'Тоже миленькие, конечно не настолько, как котики, но как бы сойдёт. Сойдёт. Да',
            logo: '', // Значок, ещё будут цвета
            background: 'lightyellow',
            hoverBackground: 'pink'
        },
        {
            title: 'Но котики лучше!',
            text: 'Факт!',
            logo: '', // Значок, ещё будут цвета
            background: 'white',
            hoverBackground: 'lightgreen'
        }
    ],
    noteColumns: 4
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        case EDIT_COLUMNS:
            return {
                ...state, noteColumns: action.columns
            }
        case CREATE_NOTE:
            const currNotes = [ ...state.notes ]
            currNotes.push(action.note)

            return {
                ...state, notes: currNotes
            }
        default:
            return state
    }
}