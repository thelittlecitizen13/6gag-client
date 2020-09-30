import axios from 'axios';

const server = 'http://localhost:8080/'
const api = axios.create({
    baseURL: server
})
const getAllGags = () =>{
    let data = api.get('/gags').then(({data}) => data);
    return data;
}

export default getAllGags;