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
        }
    ],
    noteColumns: 4
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}