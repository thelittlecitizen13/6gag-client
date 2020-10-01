import React, { useState } from 'react'
import {Card, Button} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gag.css';
import history from '../history';
import GagRating from './GagRating';


export default function Gag(props) {

    const [propsState, setpropsState] = useState(props);

    const handleClick = () =>{
        var url = `/GagPage/${propsState.image.id}`;
        history.push(url);
    }

    return (
        <Card className="card ">
            <Card.Title>{propsState.image.title}</Card.Title>
            <Card.Img 
            src={propsState.image.photo} 
            variant="top" 
            alt={propsState.image.alt} 
            className = "cardImg"
            onClick={() => handleClick()}
             />
            
            <Card.Body>
                <Card.Text>
                    <span className="font-weight-bold">Uploaded by:</span> {propsState.image.uploaderName}
                </Card.Text>
                <GagRating liked={propsState.image.liked} disliked={propsState.image.disliked} />
            </Card.Body>
        </Card>
    )
}
