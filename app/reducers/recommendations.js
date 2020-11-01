
import { ACTION_CREATORS } from '../constants';
function processRecommendations(products, cartItems) {
    return products.map((product)=>{
        const newProduct = product;
        const productId = product.id;
        const cartItem = cartItems.filter((cartItem) => cartItem.itemId === productId)[0];
        if (cartItem) {
            newProduct.quantity = cartItem.quantity;
        } else {
            delete newProduct.quantity;
        }
        return newProduct;
    })
}

function recommendations(state = [], action) {
    const { CART_LOADED, ITEMS_CHANGED,RECOMMENDATIONS_LOADED } = ACTION_CREATORS;
    const cartItems = (action.cartItems && Object.keys(action.cartItems).length > 0) ? Object.values(action.cartItems) : [];

    switch(action.type) {
        case RECOMMENDATIONS_LOADED:
            return action.recommendations.map((recommendation) => {
                return { ...recommendation, itemId: recommendation.id }
            });
        case CART_LOADED:
        case ITEMS_CHANGED:
            return  processRecommendations(state, cartItems);
        default:
            return state;
    }
}

export default recommendations;
