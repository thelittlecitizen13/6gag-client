import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gag from './Gag.js';
import {Container, Row} from 'react-bootstrap';
import getAllGags from '../Controllers/GagsController';
import axios from 'axios';

export default function HomePage() {
    const [isLoading, setLoading] = useState(true)
    const [gags, setGags] = useState([]);
    useEffect( async () => {
        let gags = await getAllGags();
        setGags(gags);
        setLoading(false);
        console.log(gags);

    }, []);
    
    // change it to map over the array
    const createGags = () => {
        var gagComponents = [];
        console.log(typeof(gags));
        
        gags.forEach(gag =>
        {   
            var gagComponent = 
            <Row>
                <Gag image={gag}></Gag>
            </Row>
            gagComponents.push(gagComponent);
        })
        var imageDivs = React.createElement('div', {}, gagComponents);
        return imageDivs;
    }

    if (isLoading) {
        return <div className="App">Loading...</div>;
      }

    return (
        <>
        <div>
            Welcome to 6gag
        </div>
        <Container>
        <Row className="text-center d-flex justify-content-center">
                {createGags()}
            </Row>
        </Container>
            
        </>
    )
}
