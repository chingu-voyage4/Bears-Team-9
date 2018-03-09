import * as actionTypes from './actions';

const AddCard = (stacks, currentStackId, frontText, backText) => {
    const currentStack = stacks.filter(stack => stack._id === currentStackId)[0];

    const newCard = {
        id: currentStack.cards.length + 1,
        front: frontText,
        back: backText
    }
    // CREATE NEW STACK BY APPENDING NEW CARD
    const newCards = currentStack.cards.concat(newCard);

    // REPLACE OLD STACK IN OLD STATE WITH NEW STACK
    // const newState = {
    //     ...state
    // }

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

    return ADD_CARD_OBJ;
}

export default AddCard;