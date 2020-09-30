import React from 'react'
import Card from 'react-bootstrap/Card';
import './Gag.css';
import history from '../history';


export default function Gag(props) {
    //const image = require(`${props.image.path}`);
    const handleClick = () =>{
        var url = `/GagPage/${props.image.id}`;
        history.push(url);
    }
    
    return (
        <Card className="card">
            <Card.Title>{props.image.title}</Card.Title>
            <Card.Img 
            src={props.image.photo} 
            variant="top" 
            alt={props.image.alt} 
            className = "cardImg"
            onClick={() => handleClick()}
             />
            
            <Card.Body>
                Comments:
            </Card.Body>
        </Card>
    )
}
