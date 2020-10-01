import React, {useState} from "react";
import { Form, Button, Row, Col } from 'react-bootstrap';

const postGag = require('../../Controllers/GagsController').postGag;
 
export default function UploadPost()
{
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
        <Form onSubmit={() => onSubmit()}>
            <Form.Group controlId="uploaderName">
                <Form.Label>Name</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter your name" 
                name = "name"
                required
                onChange = {onChange}
                />
            </Form.Group>

            <Form.Group controlId="gagTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control 
                type="text" 
                placeholder="Enter title"
                name = "title" 
                required
                onChange = {onChange}
                />
            </Form.Group>
            <Form.Group as={Row} controlId="gagAlt">
                <Form.Label column sm="2">Alt</Form.Label>
                <Col sm="5">
                    <Form.Control 
                    type="text" 
                    placeholder="Enter photo alt" 
                    name = "alt"
                    required
                    onChange = {onChange}
                    />
                </Col>
                
            </Form.Group>
            <Form.Group controlId="gagFile">
                <Form.Label>File</Form.Label>
                <Form.File 
                type="file" 
                required
                onChange = {onFileChange}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
        // <div className='buttons fadein'>
        //     <div className='button'>
 
        //         <input type='file' onChange={onChange} />
        //     </div>
        // </div>
    );
}
 
