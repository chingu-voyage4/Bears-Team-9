import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import cardsReducer from './store/card';
import CardsReducer from './reducers/CardsReducer';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// const rootReducer = combineReducers({
//     card: cardsReducer
// });

const store = createStore(
    CardsReducer,
    applyMiddleware(thunk, logger)
);

ReactDOM.render(
    <Provider store={ store } >
        <BrowserRouter>
            <App store={ store }/>
        </BrowserRouter>
    </Provider>, 
    document.getElementById('root'));
registerServiceWorker();
