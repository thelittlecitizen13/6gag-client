import React from 'react'
import { Header, Image } from 'semantic-ui-react'
import logo from './photos/icon.png';
import './Title.css';

export default function Title() {
    return (
        <>
        <div className="pageTitle">
            <br />
            <Header as='h2'>
            <Image className="titleImg" src={logo} />
            </Header>
            <Header as='h5'>
                The community with the lowest memes ever
            </Header>
            <br />
        </div>
        <br />
        </>
    )
}
