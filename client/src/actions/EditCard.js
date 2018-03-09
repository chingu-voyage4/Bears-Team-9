import * as actionTypes from './actions';

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
    const updatedStack = {
        ...currentStack,
        cards: newCards
    }
    const newStacks = stacks.map(stack => {
        if (stack._id === currentStackId) {
            return updatedStack;
        } else {
            return stack;
        }
    });

    const EDIT_CARD_OBJ = {
        type: actionTypes.UPDATE_CARD,
        stacks: newStacks
    }

    return EDIT_CARD_OBJ;
}

export default EditCard;