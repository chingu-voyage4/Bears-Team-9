import FetchRequest from './FetchRequest';
import FetchSuccess from './FetchSuccess';

const FetchState = () => {
    return(dispatch) => {
        fetch('/api/categories', {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(res => dispatch(FetchSuccess(res)))
        .catch(err => console.log(err))
        dispatch(FetchRequest());
    }
}
export default FetchState;