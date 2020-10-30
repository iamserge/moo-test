import {
    ACTION_CREATORS,
} from '../constants';

function cartReducer(state={ items: {} }, action) {
    const { CART_LOADED } = ACTION_CREATORS;
    switch(action.type) {
        case CART_LOADED:
            return {
                ...state, 
                id: action.cartId,
                items: action.cartItems,
            }
        default:
            return state;
    }

}



export default cartReducer;
