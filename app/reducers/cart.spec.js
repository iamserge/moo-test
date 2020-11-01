import { ACTION_CREATORS } from '../constants';
import cart from './cart';
const { ITEMS_CHANGED, CART_CLEARED, CART_LOADED } = ACTION_CREATORS;

describe('cart', () => {
    it('should return an empty list of products', () => {
        expect(cart({},{})).toEqual({});
    });

});
