import React, {useState, useEffect} from 'react'
import {Container, Row} from 'react-bootstrap';
import Gag from '../Gag';

const getGag = require('../../Controllers/GagsController').getGag;

export default function GagPage({match}) {

    const [isLoading, setLoading] = useState(true);
    const [gag, setGag] = useState([]);
    // 
    const id = match.params.id;

    useEffect(() => {
        async function fetchData(id) {
            console.log("fetchData");
            
            let gags = await getGag(id);
            setGag(gags);
            setLoading(false);
        }
        fetchData(id);
    }, [id]);

    

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <Container>
            <Row className="text-center d-flex justify-content-center">
                <Gag image={gag} />
            </Row>
        </Container>
    )
}
