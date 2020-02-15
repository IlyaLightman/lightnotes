const initialState = {
    notes: [
        {
            title: 'Заметка',
            text: 'Текст заметки',
            logo: '' // Значок, ещё будут цвета
        }
    ],
    count: 17
}

export default function notesReducer(state = initialState, action) {
    switch (action.type) {
        default:
            return state
    }
}