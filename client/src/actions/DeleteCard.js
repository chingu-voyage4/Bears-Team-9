import * as actionTypes from './actions';
import FetchState from './FetchState';

const DeleteCard = (stacks, currentStackId, cardId) => {
    const currentStack = stacks.filter(stack => stack._id === currentStackId)[0];
    console.log(currentStack);
    const updatedStack = {
        ...currentStack,
        cards: currentStack.cards.filter(card => card.id !== cardId)
    }
    const newStacks = stacks.map(stack => {
        if (stack.id === currentStackId) {
            return updatedStack;
        } else {
            return stack;
        }
    })
    const DELETE_CARD_OBJ = {
        type: actionTypes.DELETE_CARD,
        stacks: newStacks
    }
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
        .then(res => res.json())
        .then(res => dispatch(FetchState()))
        .catch(err => console.log(err))
    }
    // return DELETE_CARD_OBJ;
}

export default DeleteCard;