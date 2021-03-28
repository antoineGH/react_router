import React from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation = () => {
    return (
        <ul style={{display: 'flex'}}>
            {/* Create NavLink to=... */}
            <NavLink exact activeClassName="current" to="/">
                <li style={{marginLeft: 10, listStyle: 'none'}}>Home</li>
            </NavLink>

            <NavLink exact activeClassName="current" to="/About">
                <li style={{marginLeft: 10, listStyle: 'none'}}>About</li>
            </NavLink>

            <NavLink exact activeClassName="current" to="/Todo">
                <li style={{marginLeft: 10, listStyle: 'none'}}>Todo</li>
            </NavLink>
        </ul>
    );
}
