import React from 'react';
import { Link } from 'react-router-dom';

export default () => (
    <div>
        <h1>Acme-Products-React-Redux</h1>
        <ul>
            <li><Link to='/products'>Products (X)</Link></li>
            <li><Link to='/products/:id'>Top Rated</Link></li>
        </ul>
    </div>
)