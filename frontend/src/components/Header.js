import React from 'react';

const Header = () => {
    return(
        <div>
            <nav>
                <div className="nav-wrapper teal lighten-2">
                    <span className="brand-logo center">Pokédex</span>
                    <ul id="nav-mobile" className="left hide-on-med-and-down">
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Header;