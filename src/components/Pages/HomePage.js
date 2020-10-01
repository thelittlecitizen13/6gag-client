import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gag from '../Gag.js';
import {Container, Row} from 'react-bootstrap';

const getAllGags = require('../../Controllers/GagsController').getAllGags;

export default function HomePage() {

    const [isLoading, setLoading] = useState(true)
    const [gags, setGags] = useState([]);

    useEffect(()  => {
        async function fetchData (){
            let gags = await getAllGags();
            if (gags === '')
            {
                gags = [];
            }
            setGags(gags);
            setLoading(false);
        }
        fetchData();

    }, []);
    
    // change it to map over the array
    const createGags = () => {
        var gagComponents = [];
        console.log(gags);
        
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
