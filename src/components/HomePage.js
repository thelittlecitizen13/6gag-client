import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Gag from './Gag.js';
import {Container, Row} from 'react-bootstrap';



export default function HomePage() {
    const gags = require('../data/images.js').images;
    console.log(1);
    
    
    
    const showGags = () => {
        var gagComponents = [];
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
    return (
        <>
        <div>
            Welcome to 6gag
        </div>
        <Container>
        <Row className="text-center d-flex justify-content-center">
                {showGags()}
            </Row>
        </Container>
            
        </>
    )
}
