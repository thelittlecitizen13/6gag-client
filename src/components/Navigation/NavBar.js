import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import history from '../../history'

export default function NavBar() {
    const handleClick = (url) =>
    {
        history.push(url);
    }
    const goBack = () =>
    {
        history.goBack();
    }
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">6GAG</Navbar.Brand>
                <Nav className="mr-auto">
                <Nav.Link onClick={() => goBack()}>&laquo; Previous</Nav.Link>
                <Nav.Link onClick={() => handleClick('/')}>Home</Nav.Link>
                <Nav.Link onClick={() => handleClick('/MostRated')}>Most Rated</Nav.Link>
                <Nav.Link onClick={() => handleClick('/post')}>Add Post</Nav.Link>
                </Nav>
            </Navbar>
         </>
    )
}
