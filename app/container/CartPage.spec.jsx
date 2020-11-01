import React from 'react';
import { shallow } from 'enzyme';

import { CartPage, mapStateToProps } from './CartPage';

describe('<CartPage />', () => {

    const cart = [];
    const products = [];

    it('should start loading the cart when the cart page gets created', () => {
        // Given
        const loadCart = jest.fn();
        const getRecommendations = jest.fn();

        // When
        const props = { cart, products, loadCart, getRecommendations };
        const render = shallow(<CartPage {...props} />);

        // Then
        expect(loadCart).toHaveBeenCalled();
        expect(getRecommendations).toHaveBeenCalled();
    });

    it('should display a loading message when loading the cart', () => {
        // Given
        const loadCart = jest.fn();
        const loading = true;
        const getRecommendations = jest.fn();

        // When
        const props = { cart, products, loading, loadCart, getRecommendations };
        const render = shallow(<CartPage {...props} />);

        // Then
        expect(render.find('div').text()).toContain('Loading your cart');
    });

});
