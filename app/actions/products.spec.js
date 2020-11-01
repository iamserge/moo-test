import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as actions from './products';
import { ENDPOINTS, API_ROOT, ACTION_CREATORS } from '../constants';

const middlewares = [thunk.withExtraArgument(ENDPOINTS)];
const mockStore = configureMockStore(middlewares);
const cartId = "300";
const cartItems = {
    "1": {
        id: "1",
        quantity: 2
    }
}
describe('product actions', () => {

    describe('addToCart', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('dispatches fetch and resets cartItems', async () => {
            // Given
            fetchMock.postOnce(`${API_ROOT}/cart/${cartId}/item/${cartItems["1"].id}`, { body: { cartItems}});

            // When
            const store = mockStore({});
            const { API_LOADING, ITEMS_CHANGED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.addToCart(1, 1, cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: ITEMS_CHANGED, cartItems },
            ]);
        });
    });
     describe('removeFromCart', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('dispatches fetch and resets cart items', async () => {
            // Given
            fetchMock.deleteOnce(`${API_ROOT}/cart/${cartId}/item/${cartItems["1"].id}`, { body: { cartItems}});
            fetchMock.getOnce(`${API_ROOT}/cart/${cartId}`, { body: {} } );

            // When
            const store = mockStore({});
            const { API_LOADING } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.removeFromCart(1, cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: API_LOADING },
            ]);
        });
    });

    describe('increment', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('dispatches fetch and resets cartItems', async () => {
            // Given
            fetchMock.postOnce(`${API_ROOT}/cart/${cartId}/item/${cartItems["1"].id}/increment`, { body: { cartItems}});

            // When
            const store = mockStore({});
            const { API_LOADING, ITEMS_CHANGED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.incrementQuantity(1, cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: ITEMS_CHANGED, cartItems },
            ]);
        });
    });

    describe('decrement', () => {

        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('dispatches fetch and resets cartItems', async () => {
            // Given
            fetchMock.postOnce(`${API_ROOT}/cart/${cartId}/item/${cartItems["1"].id}/decrement`, { body: { cartItems}});

            // When
            const store = mockStore({});
            const { API_LOADING, ITEMS_CHANGED } = ACTION_CREATORS;

            // Then
            await store.dispatch(actions.decrementQuantity(1, cartId));
            expect(store.getActions()).toEqual([
                { type: API_LOADING },
                { type: ITEMS_CHANGED, cartItems },
            ]);
        });
    });

   
});
