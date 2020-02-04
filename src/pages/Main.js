import React from 'react';

import Logo from '../assets/logo.svg';

export default function Main({ match }) {
    return(
        <div className="main-container">
            <img src={Logo} alt="Empresa"/>
            <ul>
                <li></li>
            </ul>
        </div>
    );
}