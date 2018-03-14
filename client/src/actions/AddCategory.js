import * as actionTypes from './actions';
import FetchState from './FetchState';

const AddCategory = (newCategoryTitle) => {
    return (dispatch) => {
        fetch(`/api/categories`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                newCategory: {
                    categoryName: newCategoryTitle,
                    cards: []
                }
            })
        })
            .then( res => {
                if (!res.ok) {
                  switch( res.status ){
                      case 401:
                         throw Error('Unauthorized')
                         break;
                     
                      case 400: 
                      throw Error('Category already exists');
                     
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

export default AddCategory;