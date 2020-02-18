import axios from 'axios'

export default axios.create({
    baseURL: 'https://react-notes-fc95f.firebaseio.com/'
})