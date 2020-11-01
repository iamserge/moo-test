export const API_ROOT = 'http://localhost:4567';
export const ENDPOINTS = {
    createCart: {
        url: '/cart',
        method: 'POST'
    },
    getCart: {
        url: '/cart/<cartId>',
        method: 'GET'
    },
    clearCart: {
        url: '/cart/<cartId>/clear',
        method: 'POST'
    },
    addToCart: {
        url: '/cart/<cartId>/item/<itemId>',
        method: 'POST'
    },
    incrementQuantity: {
        url: '/cart/<cartId>/item/<itemId>/increment',
        method: 'POST'
    },
    decrementQuantity: {
        url: '/cart/<cartId>/item/<itemId>/decrement',
        method: 'POST'
    },
    removeFromCart: {
        url: '/cart/<cartId>/item/<itemId>',
        method: 'DELETE'
    }
};

export const ACTION_CREATORS = {
    API_LOADING: 'API_LOADING',
    CART_LOADED: 'CART_LOADED',
    ADDED_TO_BASKET: 'ADDED_TO_BASKET',
    RECOMMENDATIONS_LOADED: 'RECOMMENDATIONS_LOADED',
    ITEMS_CHANGED: 'ITEMS_CHANGED',
    CART_CLEARED: 'CART_CLEARED'
}

export const CACHED_KEYS = {
    BASKET_ID: 'BASKET_ID'
}
export const DEFAULT_ADD_QUANTITY = 1;