export const API_ROOT = 'http://localhost:4567';
export const ENDPOINTS = {
    createCart: {
        url: '/cart',
        method: 'POST'
    },
    addToCart: {
        url: '/cart/<cartId>/item/<itemId>',
        method: 'POST'
    }
};

export const ACTION_CREATORS = {
    API_LOADING: 'API_LOADING',
    CART_LOADED: 'CART_LOADED',
    ADDED_TO_BASKET: 'ADDED_TO_BASKET'
}