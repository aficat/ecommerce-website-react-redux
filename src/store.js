import { createStore, applyMiddleware } from 'redux'; // compose
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};
// const middleware = [thunk];
// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, initialState, applyMiddleware(thunk));

export default store;
