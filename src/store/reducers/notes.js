import { EDIT_COLUMNS, CREATE_NOTE, LOAD_NOTES_SUCCESS, LOAD_NOTES_START } from "../actions/actionTypes"

const initialState = {
    notes: [
        // {
        //     title: 'Заметка',
        //     text: 'Текст заметки',
        //     logo: 'far fa-calendar-alt', // Значок, ещё будут цвета
        //     color: 'lightblue',
        //     hoverColor: 'cyan'
        // },
        // {
        //     title: 'Заметка 2',
        //     text: 'Заметочка :3',
        //     logo: 'far fa-calendar-alt', // Значок, ещё будут цвета
        //     color: 'pink',
        //     hoverColor: 'lightblue'
        // },
        // {
        //     title: 'О котиках',
        //     text: 'Котики милые',
        //     logo: 'far fa-calendar-alt', // Значок, ещё будут цвета
        //     color: 'lightskyblue',
        //     hoverColor: 'lightyellow'
        // },
        // {
        //     title: 'О собачках',
        //     text: 'Тоже миленькие, конечно не настолько, как котики, но как бы сойдёт. Сойдёт. Да',
        //     logo: 'far fa-calendar-alt', // Значок, ещё будут цвета
        //     color: 'lightyellow',
        //     hoverColor: 'pink'
        // },
        // {
        //     title: 'Но котики лучше!',
        //     text: 'Факт!',
        //     logo: 'far fa-calendar-alt', // Значок, ещё будут цвета
        //     color: 'white',
        //     hoverColor: 'lightgreen'
        // }
    ],
    noteColumns: 4,
    loading: true
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
        case LOAD_NOTES_START:
            return {
                ...state, loading: true
            }
        case LOAD_NOTES_SUCCESS:
            return {
                ...state, notes: action.notes, loading: false
            }
        default:
            return state
    }
}