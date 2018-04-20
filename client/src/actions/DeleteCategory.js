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
                        case 400: 
                            throw Error('Cannot Delete');
                        default:
                            throw Error('Unknonw error')
                  }
                }
                return res;
            } )
            .then(res => res.json())
            .then(res => dispatch(FetchState()))
            .catch(err => console.log(err))
    }
}

export default DeleteCategory;