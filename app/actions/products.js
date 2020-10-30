import { ACTION_CREATORS } from '../constants';
import { fetchApi } from './index';
import { getCart } from './cart';
import recommendations from '../recommendations.json'
const { API_LOADING, ITEMS_CHANGED, RECOMMENDATIONS_LOADED} = ACTION_CREATORS;

export function addToCart(itemId, quantity, cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.addToCart;
        
        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method, {itemId, cartId},{
            quantity
        });
        
        dispatch({
            type: ITEMS_CHANGED,
            cartItems: cart.cartItems,
        })
    };
}


export function removeFromCart(itemId, cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.removeFromCart;
        
        dispatch({ type: API_LOADING });

        await fetchApi(url, method, {itemId, cartId},{});
        dispatch(getCart(cartId));
    };
}

export function incrementQuantity(itemId, cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.incrementQuantity;
        
        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method, {itemId, cartId},{});
        
        dispatch({
            type: ITEMS_CHANGED,
            cartItems: cart.cartItems,
        })
    };
}

export function decrementQuantity(itemId, cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.decrementQuantity;
        
        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method, {itemId, cartId},{});
        
        dispatch({
            type: ITEMS_CHANGED,
            cartItems: cart.cartItems,
        })
    };
}

export function getRecommendations() {
    return async (dispatch, _, config) => {
        dispatch({
            type: RECOMMENDATIONS_LOADED,
            recommendations: recommendations.products,
        })
    };
}
