import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './cart';
import { ENDPOINTS, API_ROOT, ACTION_CREATORS } from '../constants';

const middlewares = [thunk.withExtraArgument(ENDPOINTS)];
const mockStore = configureMockStore(middlewares);

describe('cart actions', () => {

    describe('loadCart', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('creates a cart when CART_LOADED is dispatched', async () => {
            // Given
            fetchMock.postOnce(`${API_ROOT}/cart`, { body: { cartId: '', items: []}});

            // When
            const store = mockStore({});
            const { API_LOADING, CART_LOADED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.loadCart());
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: CART_LOADED, cartId: '' },
            ]);
        });
    });
    describe('getCart', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });
        it('creates a cart when CART_LOADED is dispatched', async () => {
            // Given
            const cartId = '300';
            const response = {
                "cartId": cartId,
                "cartItems": {}
            }
            fetchMock.getOnce(`${API_ROOT}/cart/${cartId}`, { body: response } );

            // When
            const store = mockStore({});
            const { API_LOADING, CART_LOADED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.getCart(cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: CART_LOADED, cartId, cartItems: {} },
            ]);
        });
    });
    describe('clearCart', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });
        it('clears cart when CART_CLEARED is dispatched', async () => {
            // Given
            const cartId = '300';
            fetchMock.postOnce(`${API_ROOT}/cart/${cartId}/clear`, {});

            // When
            const store = mockStore({});
            const { API_LOADING, CART_CLEARED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.clearCart(cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: CART_CLEARED },
            ]);
        });
    });


});
