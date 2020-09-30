import React from 'react'
import Card from 'react-bootstrap/Card';
import './Gag.css';


export default function Gag(props) {
    //const image = require(`${props.image.path}`);
    return (
        <Card className="card">
            <Card.Title>{props.image.title}</Card.Title>
            {console.log(props.image.path)}
            <Card.Img src={`${props.image.path}`} variant="top" alt={props.image.alt} className = "cardImg"/>
            <Card.Body>
                Comments:
            </Card.Body>
        </Card>
    )
}
