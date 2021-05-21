import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <nav>
            <div className="nav-wrapper #004d40 teal darken-3">
                <Link to="/" className="brand-logo">Vending Snack Machine Desktop</Link>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li><Link to={'/'}> List </Link></li>
                    <li><Link to={'/editing'}> Controls </Link></li>
                    <li><Link to={'/statistic'}> Statistic</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Header;