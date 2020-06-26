import axios from 'axios';

const api = axios.create({baseURL: 'https://server-node-example.herokuapp.com/produtos'});

export default api;