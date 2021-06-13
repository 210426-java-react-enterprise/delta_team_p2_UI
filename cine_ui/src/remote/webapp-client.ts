import axios from 'axios';

export const webappClient = axios.create({
    //baseURL: 'http://52.14.38.58:5555',
    baseURL: 'http://localhost:5555',
    headers: {
        'Content-Type': 'application/json'
    }
})
//52.14.38.58
//52.14.38.58:5555