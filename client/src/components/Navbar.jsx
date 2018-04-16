import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class navbar extends Component {

    render() {
        const user = this.props.store.getState().user;

        const login = (
            <a className="btn btn--navbar"
                            href="/auth/login">Log in</a>
        );

        const logout = (
            <div>
                <a className="btn btn--navbar" href="">{user.userName}</a>
                <a className="btn btn--navbar"
                    href="/auth/logout">Log Out</a>
            </div>
        )
        let links = null;
        if (this.props.studyMode) {
            links = (
                <div>
                    <a
                        onClick={() => this.props.dashboardClicked()}
                        className="btn btn--navbar">
                        <i className="fas fa-arrow-left"></i> Dashboard
                    </a>
                </div>
            );
        } else {
            links = (
                <div>
                    <NavLink
                        to='/'
                        className="btn btn--navbar btn--navbar--brand"
                        >
                        Flashcard App
                    </NavLink>
                    <NavLink
                        to='/dashboard'
                        className="btn btn--navbar"
                        activeClassName="btn--navbar btn--navbar--active">
                        Dashboard
                    </NavLink>
                    { user.isLoggedIn ? (
                        <NavLink
                            to='/edit'
                            className="btn btn--navbar"
                            activeClassName="btn btn--navbar btn--navbar--active">
                            Edit Cards
                        </NavLink>
                    ) : null }
                </div>
            );
        }
        return (
            <div className="navbar content-width">
                <div className="navbar__left">
                    { links }
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