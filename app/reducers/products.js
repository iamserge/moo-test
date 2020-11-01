
import { ACTION_CREATORS } from '../constants';

function products(state = [], action) {
    const { ITEMS_CHANGED, CART_CLEARED, CART_LOADED } = ACTION_CREATORS;
    const cartItems = (action.cartItems && Object.keys(action.cartItems).length > 0) ? Object.values(action.cartItems) : [];
   

    switch(action.type) {
        case CART_LOADED:
        case ITEMS_CHANGED:
            return  cartItems.map((item) => {
                const productId = item.itemId ? item.itemId : item.id;
                return { ...item, id: productId}

            });

        case CART_CLEARED:
            return [];

        default:
            return state;
    }
}

export default products;
