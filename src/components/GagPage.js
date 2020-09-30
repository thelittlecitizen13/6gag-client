import React, {useState, useEffect} from 'react'
import {Container, Row, Card} from 'react-bootstrap';

const getGag = require('../Controllers/GagsController').getGag;

export default function GagPage({ match }) {

    const [isLoading, setLoading] = useState(true)
    const [gag, setGag] = useState([]);
    const id = match.params.id;

    useEffect(() => {
        async function fetchData(id) {
            let gags = await getGag(id);
            setGag(gags);
            setLoading(false);
        }
        fetchData(id);
    }, []);

    

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <Container>
            <Row className="text-center d-flex justify-content-center">
                <Card className="card">
                <Card.Title>{gag.title}</Card.Title>
                {console.log(gag.path)}
                <Card.Img src={`${gag.path}`} variant="top" alt={gag.alt} className = "cardImg"/>
                <Card.Body>
                    Comments:
                </Card.Body>
                </Card>
            </Row>
        </Container>
    )
}
