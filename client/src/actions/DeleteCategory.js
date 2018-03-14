import * as actionTypes from './actions';
import FetchState from './FetchState';

const DeleteCategory = (deleteCategoryId) => {
    return (dispatch) => {
        fetch(`/api/categories`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'content-type': 'application/json',
                'id': deleteCategoryId
            }
        })
             .then( res => {
                if (!res.ok) {
                  switch( res.status ){
                      case 401:
                         throw Error('Unauthorized')
                         break;
                     
                      case 400: 
                      throw Error('Cannot Delete');
                     
                  }
                }
                return res;
            } )
            .then(res => res.json())
            .then(res => dispatch(FetchState()))
            // .then(res => dispatch(FetchSuccess(res)))
            // .then(() => {return ADD_CARD_OBJ})
            .catch(err => console.log(err))
    }
    // return ADD_CARD_OBJ;
}

export default DeleteCategory;