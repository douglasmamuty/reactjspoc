import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:50906/'
});

export default Api;