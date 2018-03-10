import * as actionTypes from './actions';

const FetchSuccess = (stacks) => {
    const STATE_OBJ = {
        type: actionTypes.FETCH_SUCCESS,
        stacks: stacks,
        status: 'success'
    }
    return STATE_OBJ
}

export default FetchSuccess;