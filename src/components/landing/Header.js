import React from 'react';

import { NavLink } from 'react-router-dom';

export const HeaderNav = () => {
    return (
        <nav className="navbar navbar-toggleable-sm bg-info navbar-inverse">
            <div className="container">
                <div className="collapse navbar-collapse" id="mainNav">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" exact activeClassName="active" to="/">Home</NavLink>
                        <NavLink className="nav-item nav-link" activeClassName="active" to="/users" >Users</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};


export default HeaderNav;

