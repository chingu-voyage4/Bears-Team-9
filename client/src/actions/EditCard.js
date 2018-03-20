import FetchState from './FetchState';

const EditCard = (stacks, currentStackId, cardId, newFront, newBack) => {
    const currentStack = stacks.filter(stack => stack._id === currentStackId)[0];
    const updatedCard = currentStack.cards.filter(card => card._id === cardId)[0];
    updatedCard.front = newFront;
    updatedCard.back = newBack;
    const newCards = currentStack.cards.filter(card => {
        if (card._id === cardId) {
            return updatedCard;
        } else {
            return card;
        }
    });

    return (dispatch) => {
        fetch(`/api/category/${currentStackId}`, {
            credentials: 'include',
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                updatedCards: newCards
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

export default EditCard;