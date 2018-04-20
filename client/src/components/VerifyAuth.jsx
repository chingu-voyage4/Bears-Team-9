// import React, { Component } from 'react';
import { Component } from 'react';

class VerifyAuth extends Component {

    componentDidMount() {
        fetch( '/auth/checkAuth', { credentials: 'include' } )
            .then( res => res.json() )
            .then( res => console.log( res ) ) 
            .catch( err => console.log( err ) )
    }

    render(){
        return null;
    }
}

export default VerifyAuth;