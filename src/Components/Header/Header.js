import React from 'react';

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #004d40 teal darken-4">
                <a href="#" className="brand-logo">Vending Machine</a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><a href="badges.html">Controls</a></li>
                    <li><a href="collapsible.html">Statistic</a></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;