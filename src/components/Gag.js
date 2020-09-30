import React from 'react'
import Card from 'react-bootstrap/Card';

export default function Gag(props) {
    return (
        <Card>
            <Card.Title>{props.image.title}</Card.Title>
            <Card.Img variant="top" src={props.image.path} alt={props.image.alt}/>
            <Card.Body>
                Comments:
            </Card.Body>
        </Card>
    )
}
