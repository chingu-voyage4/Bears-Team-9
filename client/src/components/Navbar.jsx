import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// class navbar extends Component {
//     render() {
//         const user = this.props.store.getState().user;

//         const login = (
//             <a className="btn btn--navbar"
//                             href="http://localhost:3001/auth/login">Log in</a>
//         );

//         const logout = (
//             <div>
//                 <a className="btn btn--navbar" href="">{user.userName}</a>
//                 <a className="btn btn--navbar"
//                     href="http://localhost:3001/auth/logout">Log Out</a>
//             </div>
//         )
//         let links = null;
//         if (this.props.studyMode) {
//             links = (
//                 <div>
//                     <a
//                         onClick={() => this.props.dashboardClicked()}
//                         className="btn btn--navbar">
//                         <i className="fas fa-arrow-left"></i> Dashboard
//                     </a>
//                 </div>
//             );
//         } else {
//             links = (
//                 <div>
//                     <NavLink
//                         to='/'
//                         className="btn btn--navbar btn--navbar--brand"
//                         >
//                         Flashcard App
//                     </NavLink>
//                     <NavLink
//                         to='/dashboard'
//                         className="btn btn--navbar"
//                         activeClassName="btn--navbar btn--navbar--active">
//                         Dashboard
//                     </NavLink>
//                     { user.isLoggedIn ? (
//                         <NavLink
//                             to='/edit'
//                             className="btn btn--navbar"
//                             activeClassName="btn btn--navbar btn--navbar--active">
//                             Edit Cards
//                         </NavLink>
//                     ) : null }
//                 </div>
//             );
//         }
//         return (
//             <div className="navbar content-width">
//                 <div className="navbar__left">
//                     { links }
//                 </div>
//                 <div className="navbar__right">
//                     <div>
//                         { user.isLoggedIn ? logout : login }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

// export default navbar;
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Toggle from 'material-ui/Toggle';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import SvgIcon from 'material-ui/SvgIcon';
import { blue500, red500, greenA200 } from 'material-ui/styles/colors';

class Login extends Component {
    static muiName = 'FlatButton';

    render() {
        return (
            <FlatButton {...this.props} href="http://localhost:3001/auth/login" label="Login" />
        );
    }
}

const Logged = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton iconStyle={{ color: 'white' }}><MoreVertIcon /></IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <NavLink to='/dashboard' style={{ textDecoration: 'none' }}><MenuItem>Dashboard</MenuItem></NavLink>
        <NavLink to='/edit' style={{ textDecoration: 'none' }}><MenuItem>Edit Cards</MenuItem></NavLink>
        <MenuItem primaryText="Sign out" href='http://localhost:3001/auth/logout'/>
    </IconMenu>
);

class navbar extends Component {
    render() {
        console.log('user', this.props.store.getState().user.isLoggedIn);
        return (
            <MuiThemeProvider>
                <AppBar
                    style={{ backgroundColor: 'transparent', fontFamily: 'Poppins' }}
                    showMenuIconButton={false}
                    title={<NavLink style={{ textDecoration: 'none', color: 'white', fontWeight: 'bold' }} to='/'>Flashcard App</NavLink>}
                    iconElementRight={this.props.store.getState().user.isLoggedIn ? <Logged /> : <Login />}
                />
            </MuiThemeProvider>
        )
    }
};

export default navbar;
