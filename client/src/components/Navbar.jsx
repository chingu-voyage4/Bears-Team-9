import React from 'react';
import { NavLink } from 'react-router-dom';

const navbar = () => {
    return (
        <div className="navbar content-width">
            <div className="navbar__left">
                <div>
                    <NavLink 
                        to='/dashboard' 
                        className="btn btn--navbar"
                        activeClassName="btn--navbar btn--navbar--active">
                            Dashboard
                    </NavLink>
                    <NavLink 
                        to='/edit' 
                        className="btn btn--navbar"
                        activeClassName="btn btn--navbar btn--navbar--active">
                            Edit Cards
                    </NavLink>
                    <NavLink 
                        to='/preferences' 
                        className="btn btn--navbar"
                        activeClassName="btn btn--navbar btn--navbar--active">
                            Preferences
                    </NavLink>
                    {/* <a href="#" className="btn btn--navbar">Dashboard</a>
                    <a href="#" className="btn btn--navbar">Edit Cards</a>
                    <a href="#" className="btn btn--navbar">Preferences</a> */}
                </div>
            </div>
            <div className="navbar__right">
                <div>
                    <span className="btn btn--navbar">Logout</span>
                </div>
            </div>
        </div>
    );
}

export default navbar;