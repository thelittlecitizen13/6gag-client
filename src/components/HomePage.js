import React from 'react';

export default function HomePage() {
    const gags = require('../data/images.js').images;
    return (
        <div>
            Welcome to 6gag
            {gags.length}
        </div>
    )
}
