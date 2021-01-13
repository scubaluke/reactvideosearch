import axios from 'axios'


const KEY = 'AIzaSyBAOSw5eIJZBshA8lmPvgcgnIDdqIhIQHk'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        // type: 'video',
        maxResults: 5,
        key: KEY,

    }
})