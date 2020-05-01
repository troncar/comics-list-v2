import React from 'react';
import './NavBar.scss';

const NavBar = () => {
    return (  
        <div className="navBar">
            <div className="navBar__title">News Comics</div>
            <button className="navBar__items--mobile"></button>
        </div>
    );
}

export default NavBar;
