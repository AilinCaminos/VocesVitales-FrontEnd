import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import logo from '../imgs/logo.png';

const Navbar = () => {
    return (
        <div className="navbar">
            <section className="header-img">
                <img className="logo" src={logo} alt="Logo" />
            </section>
            <section className="header-container">
                <button className="header-container-button"><FontAwesomeIcon icon={faSearch} /></button>
                <input className="header-container-input" placeholder="Búsqueda..." />
            </section>
        </div>
    );
}

export default Navbar;
