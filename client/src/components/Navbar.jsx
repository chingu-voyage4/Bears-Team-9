import React from 'react';

const navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar__left">
                <div>
                    <a href="#" className="btn btn--navbar">Dashboard</a>
                    <a href="#" className="btn btn--navbar">Edit Cards</a>
                    <a href="#" className="btn btn--navbar">Preferences</a>
                </div>
            </div>
            <div className="navbar__right">
                <div>
                    <a href="#" className="btn btn--navbar">Logout</a>
                </div>
            </div>
        </div>
    );
}

export default navbar;