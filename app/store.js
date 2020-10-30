import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';
import { ENDPOINTS, CACHED_KEYS } from './constants';

const getCachedBasketId = () => {
    if (typeof window.localStorage !== 'undefined') {
        return localStorage.getItem(CACHED_KEYS.BASKET_ID);
    }
}
const cachedBasketId = getCachedBasketId();
const initialState = {
    cart: {
        cartId: cachedBasketId ? cachedBasketId : ""
    }
}
const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk.withExtraArgument(ENDPOINTS))
);

export default store;
