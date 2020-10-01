import React, {useState} from "react";
import { MDBFreeBird, MDBInput, MDBCol, MDBRow, MDBCardBody, MDBCardTitle, MDBBtn, MDBContainer, MDBEdgeHeader } from
"mdbreact";
import {Button} from 'react-bootstrap';

const postGag = require('../../Controllers/GagsController').postGag;

export default function EdgeHeaderPage(props){

    const [postData, setPostData] = useState({
        name: "",
        title: "",
        alt: "",
        photo: ""
    });
 
    function toBase64 (file)
    {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    }

    function onChange(e) {
        let nam = e.target.name;
        let val = e.target.value;
        let state = postData;
        state[nam] = val;
        setPostData(state);
    }
 
    async function onFileChange(e) {
        const photo = Array.from(e.target.files)
        const photoReader = await toBase64(photo[0]);
        let state = postData;
        state.photo = photoReader;
        setPostData(state);
    }

    function onSubmit() {
        console.log(Object.keys(postData));
        
        postGag(postData);
    }

    return (
      <MDBContainer className="mt-3">
        <MDBEdgeHeader color="mdb-color darken-2"></MDBEdgeHeader>
        <MDBFreeBird>
          <MDBRow>
            <MDBCol md="8" lg="7" className="mx-auto float-none white z-depth-1 py-2 px-2">
              <MDBCardBody>
                <MDBCardTitle>Upload Your Own!</MDBCardTitle>
                <p className="pb-4">Upload a gag and become a part of out community</p>
                <form onSubmit={() => onSubmit()}>
                  <MDBInput label="Your name" group type="text" icon="align-justify" 
                  name="name" onChange = {onChange} required/>
                  <MDBInput label="Post title" group type="text" icon="align-justify" 
                  name="title" onChange = {onChange} required/>
                  <MDBInput label="Image alt" group type="text" icon="align-justify" 
                  name="alt" onChange = {onChange} required/>
                  <MDBInput type="file" rows="2" label="Image" icon="file-alt" 
                  name="photo" onChange = {onFileChange} required/>
                  <Button variant="primary" type="submit">Submit</Button>
                </form>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBFreeBird>
      </MDBContainer>
    );
};