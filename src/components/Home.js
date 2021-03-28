import React from 'react';
import { useHistory } from 'react-router-dom';

export const Home = () => {

    const history = useHistory();

    return (
        <div>
            <h1>Home Component Page</h1>
            <button onClick={ () => history.push('/About')} >About</button>
        </div>
    );
}