import { ACTION_CREATORS } from '../constants';
import { fetchApi } from './index';



export function addToCart(itemId, quantity, cartId) {
    return async (dispatch, _, config) => {
        const { url, method } = config.addToCart;
        const { API_LOADING, ADDED_TO_BASKET } = ACTION_CREATORS;
        
        
        dispatch({ type: API_LOADING });

        const cart = await fetchApi(url, method, {itemId, cartId},{
            quantity
        });
        
        dispatch({
            type: ADDED_TO_BASKET,
            ...cart,
        })
    };
}
