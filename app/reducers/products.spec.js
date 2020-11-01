import { ACTION_CREATORS } from '../constants';
import products from './products';
const { ITEMS_CHANGED, CART_CLEARED, CART_LOADED } = ACTION_CREATORS;

describe('products', () => {
    it('should return an empty list of products', () => {
        expect(products([],{})).toEqual([]);
    });

    it('should return an array of products on ITEM_CHANGED', () => {
        //Given
        const item = {
            "id": 1
        }
        const action = {
            type: ITEMS_CHANGED,
            cartItems: {
                "1": item
            }
        }

        //Then
        expect(products([],action)).toEqual([item]);
    });

    it('should return an array of products on CART_LOADED', () => {
        //Given
        const item = {
            "id": 1
        }
        const action = {
            type: CART_LOADED,
            cartItems: {
                "1": item
            }
        }

        //Then
        expect(products([],action)).toEqual([item]);
    });

    it('should return an empry array CART_CLEARED', () => {
        //Given
        const item = {
            "id": 1
        }
        const action = {
            type: CART_CLEARED,
            cartItems: {
                "1": item
            }
        }

        //Then
        expect(products([item],action)).toEqual([]);
    });
});
