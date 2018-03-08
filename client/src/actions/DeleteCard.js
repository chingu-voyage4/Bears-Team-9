import * as actionTypes from './actions';

const DeleteCard = (stacks, currentStackId, cardId) => {
    const currentStack = stacks.filter(stack => stack.id === currentStackId)[0];
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
    return DELETE_CARD_OBJ;
}

export default DeleteCard;