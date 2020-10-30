import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { ENDPOINTS } from './constants';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk.withExtraArgument(ENDPOINTS))
);

export default store;
