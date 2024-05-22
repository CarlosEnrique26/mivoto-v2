import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000/api'

const requestGenerico = {
    get : (url) => axios.get(url).then(response),
};