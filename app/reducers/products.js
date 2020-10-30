
import { ACTION_CREATORS } from '../constants';

function products(state = [], action) {
    const { CART_LOADED } = ACTION_CREATORS;
    switch(action.type) {
        case CART_LOADED:
            
            return  Object.keys(action.cartItems).length > 0 ? Object.values(action.cartItems) : [];
        default:
            return state;
    }
}

export default products;
