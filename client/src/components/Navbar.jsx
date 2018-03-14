import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class navbar extends Component {

    render() {
        const user = this.props.store.getState().user;

        const login = (
            <a className="btn btn--navbar"
                            href="http://localhost:3001/auth/login">Log in</a>
        );

        const logout = (
            <div>
                <a className="btn btn--navbar" href="">{user.userName}</a>
                <a className="btn btn--navbar"
                    href="http://localhost:3001/auth/logout">Log Out</a>
            </div>
        )
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
                        { user.isLoggedIn ? logout : login }
                    </div>
                </div>
            </div>
        );
    }
}

export default navbar;