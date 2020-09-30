import React from 'react'
import {Container, Row, Card} from 'react-bootstrap';

export default function GagPage({ match }) {
    console.log("hi");
    let id = match.params.id;
    console.log(id);
    const gags = require('../data/images.js').images;
    var image = gags.find(gag => parseInt(gag.id) === parseInt(id));
    return (
        <Container>
            <Row className="text-center d-flex justify-content-center">
                <Card className="card">
                <Card.Title>{image.title}</Card.Title>
                {console.log(image.path)}
                <Card.Img src={`${image.path}`} variant="top" alt={image.alt} className = "cardImg"/>
                <Card.Body>
                    Comments:
                </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
