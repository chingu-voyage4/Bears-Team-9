import * as actionTypes from './actions';

const ChangeStack = (newStackId) => {
    const CHANGE_STACK_OBJ = {
        type: actionTypes.CHANGE_STACK,
        stackId: newStackId
    }

    return CHANGE_STACK_OBJ;
}

export default ChangeStack;