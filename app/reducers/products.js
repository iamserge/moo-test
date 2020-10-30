
import { ACTION_CREATORS } from '../constants';

function products(state = [], action) {
    const { ITEMS_CHANGED, CART_LOADED } = ACTION_CREATORS;
    const cartItems = (action.cartItems && Object.keys(action.cartItems).length > 0) ? Object.values(action.cartItems) : [];

    switch(action.type) {
        case CART_LOADED:
        case ITEMS_CHANGED:
            return  cartItems;
            break;
        default:
            return state;
    }
}

export default products;
