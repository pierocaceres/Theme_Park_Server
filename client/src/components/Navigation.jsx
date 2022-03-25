import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    
    return (
        <nav className="nav" >
            <h1> Disney Parks in Florida </h1>
            <div>
                <Link to="/"> Home </Link>
                <Link to="/rollercoasters"> Coasters </Link>
            </div>    
        </nav>
    );
}

export default Navigation;