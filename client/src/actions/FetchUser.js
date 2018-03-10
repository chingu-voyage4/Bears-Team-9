import * as ActionTypes from '../actions/actions';

const FetchUser = () => {

    return ( dispatch ) => {
        fetch( '/auth/checkAuth', { credentials: 'include' } )
            .then( res => {
               if (!res.ok) {
                  throw Error();
               }
               return res;
            } )
            .then( res => res.json() )
            .then( res => dispatch( {
                type: ActionTypes.LOGIN_USER,
                payload: { ...res, isLoggedIn: true }
            } ) )
            .catch( err => dispatch( {
                type: ActionTypes.LOGOUT_USER,
                payload: { 
                    userName: '',
                    _id     : '',
                    isLoggedIn : false
                }
            } ) )

    }
}


export default FetchUser