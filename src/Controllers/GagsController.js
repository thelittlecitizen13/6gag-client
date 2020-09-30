import { create } from 'axios';

const server = 'http://localhost:8080/'
const api = create({
    baseURL: server
})
const getAllGags = () =>{
    let data = api.get('/gags').then(({data}) => data);
    return data;
}

const getGag = (id) =>{
    let data = api.get(`/gags/${id}`).then(({data}) => data);
    return data;
}

const _getAllGags = getAllGags;
export { _getAllGags as getAllGags };
const _getGag = getGag;
export { _getGag as getGag };