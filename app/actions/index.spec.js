import fetchMock from 'fetch-mock';
import * as actions from './index';
import { API_ROOT } from '../constants';
const cartId = "300";
const testMethod = "POST";
const testRequestBody = {
    "test": "test"
}
const testRequest = {
    body: JSON.stringify(testRequestBody),
    method: testMethod,
    headers: {
        "Content-Type": "application/json"
    }
}

describe('index actions', () => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve(testRequestBody),
        })
    );
    describe('processUrl', () => {

        it('replaces params in url with provided values', async () => {
            //Given
            const url = "/cart/<cartId>";
            const params = { cartId }

            //When
            const processedUrl = actions.processUrl(url, params);

            //Then

            expect(processedUrl).toEqual("/cart/300");
        });
    });

    describe('fetchApi', () => {

        beforeEach(() => {
            fetch.mockClear();
        });
        afterEach(() => {
            fetchMock.reset()
            fetchMock.restore()
        });

        it('calls global fetch function', async () => {
            // Given
           
            window.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => (testRequestBody),
            })

            // When
            actions.fetchApi('/test/<cartId>', 'POST', { "cartId": cartId }, testRequestBody)

            // Then
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`${API_ROOT}/test/${cartId}`, {...testRequest})
        });

        it('calls global fetch without body for GET method', async () => {
            // Given
            window.fetch.mockResolvedValueOnce({
                ok: true,
                json: async () => (testRequestBody),
            })


            // When
            actions.fetchApi('/test/<cartId>', 'GET', { "cartId": cartId }, testRequestBody)

            // Then
            expect(fetch).toHaveBeenCalledTimes(1);
            expect(fetch).toHaveBeenCalledWith(`${API_ROOT}/test/${cartId}`, { method: 'GET', headers: testRequest.headers})
        });
        
        it('return JSON on sucess', async () => {
            // Given
            fetchMock.postOnce(`${API_ROOT}/cart`, { body: testRequestBody });

            // When
            const response = await actions.fetchApi('/cart', 'POST', { "cartId": cartId }, testRequestBody)

            // Then
            expect(response).toEqual(testRequestBody);
        });
       
    });



});
