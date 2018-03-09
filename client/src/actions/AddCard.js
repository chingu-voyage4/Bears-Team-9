import * as actionTypes from './actions';
import FetchState from './FetchState';

const AddCard = (stacks, currentStackId, frontText, backText) => {
    const currentStack = stacks.filter(stack => stack._id === currentStackId)[0];

    const newCard = {
        id: currentStack.cards.length + 1,
        front: frontText,
        back: backText
    }
    // CREATE NEW STACK BY APPENDING NEW CARD
    const newCards = currentStack.cards.concat(newCard);

    const newStacks = stacks.map(stack => {
        if (stack._id === currentStackId) {
            return {
                ...stack,
                cards: newCards
            };
        } else {
            return stack;
        }
    })

    const ADD_CARD_OBJ = {
        type: actionTypes.ADD_CARD,
        stacks: newStacks
    }

    return(dispatch) => {
        fetch(`/api/category/${currentStackId}`, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                front: frontText,
                back: backText
            })
        })
        .then(res => res.json())
        .then(res => dispatch(FetchState()))
        // .then(res => dispatch(FetchSuccess(res)))
        // .then(() => {return ADD_CARD_OBJ})
        .catch(err => console.log(err))
    }
    // return ADD_CARD_OBJ;
}

export default AddCard;