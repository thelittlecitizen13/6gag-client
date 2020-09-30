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

const postGag = (data) =>
{
    api.post("/gags/post", data)
            .then(r => console.log(r));
    
}

const _postGag = postGag;
export { _postGag as postGag };
const _getAllGags = getAllGags;
export { _getAllGags as getAllGags };
const _getGag = getGag;
export { _getGag as getGag };