import axios from 'axios';

export const webappClient = axios.create({
    baseURL: 'http://localhost:5555',
    headers: {
        'Content-Type': 'application/json'
    }
})
//52.14.38.58