import { ACTION_CREATORS } from '../constants';
import { fetchApi } from './index';

export function loadCart() {
    return async (dispatch, _, config) => {
        const { url, method } = config.createCart;
        const { API_LOADING, CART_LOADED } = ACTION_CREATORS;

        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method);
        
        dispatch({
            type: CART_LOADED,
            ...cart,
        })
        return cart.cartId;
    };
}

export function getCart(cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.getCart;
        const { API_LOADING, CART_LOADED } = ACTION_CREATORS;

        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method, { cartId });
        
        dispatch({
            type: CART_LOADED,
            ...cart,
        })
    };
}




