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
                        case 400: 
                            throw Error('Category already exists');
                        default:
                            throw Error('Unknow error');
                  }
                }
                return res;
            } )
            .then(res => res.json())
            .then(res => dispatch(FetchState()))
            .catch(err => console.log(err))
    }
}

export default AddCategory;