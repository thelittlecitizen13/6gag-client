import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import Gag from '../Gag';

const getAllGags = require('../../Controllers/GagsController').getAllGags;

export default function MostRated() {
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
        let sortedGags = gags;
        sortedGags.sort((a, b) => (parseInt(b.liked) - parseInt(b.disliked) - (parseInt(a.liked) - parseInt(a.disliked))))
        var gagComponents = [];
        
        sortedGags.forEach(gag =>
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
