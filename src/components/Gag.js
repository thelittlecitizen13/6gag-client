import React from 'react'
import {Card, Container, Row} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gag.css';
import history from '../history';


export default function Gag(props) {
    //const image = require(`${props.image.path}`);
    const handleClick = () =>{
        var url = `/GagPage/${props.image.id}`;
        history.push(url);
    }
    
    return (
        <Card className="card ">
            <Card.Title>{props.image.title}</Card.Title>
            <Card.Img 
            src={props.image.photo} 
            variant="top" 
            alt={props.image.alt} 
            className = "cardImg"
            onClick={() => handleClick()}
             />
            
            <Card.Body>
                <Card.Text>
                    <span className="font-weight-bold">Uploaded by:</span> {props.image.uploaderName}
                </Card.Text>
                <Card.Text>
                    <span className="font-weight-bold">Rating: </span>
                </Card.Text>
            </Card.Body>
        </Card>
    )
}
