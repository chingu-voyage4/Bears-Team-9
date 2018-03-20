import FetchState from './FetchState';

const DeleteCard = (stacks, currentStackId, cardId) => {
    return(dispatch) => {
        fetch(`/api/category/${currentStackId}`, {
            credentials: 'include',
            method: 'DELETE',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                cardId: cardId
            })
        })
        .then( res => {
            if (!res.ok) {
              switch( res.status ){
                  case 401:
                        throw Error('Unauthorized');
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

export default DeleteCard;