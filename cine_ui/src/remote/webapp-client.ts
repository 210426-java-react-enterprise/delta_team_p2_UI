import axios from 'axios';

export const webappClient = axios.create({
    //baseURL: 'http://52.14.38.58:5555',
    baseURL: 'http://localhost:5555',
    headers: {
        'Content-Type': 'application/json'
    }
})


export const webappClientAuthorized = axios.create({
    //baseURL: 'http://52.14.38.58:5555',
    baseURL: 'http://localhost:5555',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem("authorization"),
    }
})


//52.14.38.58
//52.14.38.58:5555