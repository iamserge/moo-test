import {
    ACTION_CREATORS,
} from '../constants';
import { CACHED_KEYS } from '../constants';

function cartReducer(state={ items: [] }, action) {
    const { CART_LOADED } = ACTION_CREATORS;
    switch(action.type) {
        case CART_LOADED:
            if (window.localStorage) {
                localStorage.setItem(CACHED_KEYS.BASKET_ID, action.cartId)
            }
            return {
                ...state, 
                cartId: action.cartId,
            }
        default:
            return state;
    }

}



export default cartReducer;
