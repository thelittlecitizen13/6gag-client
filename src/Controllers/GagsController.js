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
    console.log("get gag");
    
    return data;
}

const postGag = (data) =>
{
    var res;
    api.post("/gags/post", data)
            .then((response) => 
            res = response);
    return res;
    
}

const rateGag = (id, rate) =>{
    api.post(`/gags/${id}/rate`, rate).then(r => console.log(r));
}

const _postGag = postGag;
export { _postGag as postGag };
const _getAllGags = getAllGags;
export { _getAllGags as getAllGags };
const _getGag = getGag;
export { _getGag as getGag };
const _rateGag = rateGag;
export { _rateGag as rateGag };