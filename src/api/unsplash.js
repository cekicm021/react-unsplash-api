import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID 30d357baa51072420cb98c230b59a6c4be154a17d9c7e46f711997b20634d93b'
    }
});