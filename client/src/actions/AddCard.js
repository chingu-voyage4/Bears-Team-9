import FetchState from './FetchState';

const AddCard = (stacks, currentStackId, frontText, backText) => {
    return(dispatch) => {
        fetch(`/api/category/${currentStackId}`, {
            credentials: 'include',
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                front: frontText,
                back: backText
            })
        })
        .then( res => {
            if (!res.ok) {
              switch( res.status ){
                    case 401:
                        throw Error('Unauthorized')                 
                    default: 
                        throw Error('Error');
              }
            }
            return res;
        } )
        .then(res => res.json())
        .then(res => dispatch(FetchState()))
        .catch(err => console.log(err))
    }
}

export default AddCard;