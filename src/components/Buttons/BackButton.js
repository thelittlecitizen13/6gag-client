import React from 'react'
import history from '../../history';
import './BackButton.css';

export default function BackButton() {
    const goBack = () => {
        history.goBack();
    }
    return (
        <a href="#" class="previous" onClick={() => goBack()}>&laquo; Previous</a>
    )
}
