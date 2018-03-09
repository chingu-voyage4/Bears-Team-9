import * as actionTypes from './actions';

const FetchRequest = () => {
    const REQUEST_OBJ = {
        type: actionTypes.FETCH_REQUEST,
        status: 'loading'
    }
    return REQUEST_OBJ;
};

export default FetchRequest;