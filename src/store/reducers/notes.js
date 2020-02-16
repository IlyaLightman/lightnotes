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
            text: 'Ну тоже миленькие',
            logo: '', // Значок, ещё будут цвета
            background: 'pink',
            hoverBackground: 'lightyellow'
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
        default:
            return state
    }
}