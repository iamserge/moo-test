import React from 'react';
import { shallow } from 'enzyme';
import { DEFAULT_ADD_QUANTITY } from '../../constants';
import ProductItem from './ProductItem';

describe('<ProductItem />', () => {

    it('should render product title', () => {
        // Given
        const product = { id: 1, name: 'A' };

        // When
        const render = shallow(<ProductItem product={product}  />);
        const title = render.find('h3');

        // Then
        expect(title.text()).toContain('Product 1');
    });

    it('should trigger addToCart with the right productId when product is not in the basket - quantity not defined', () => {
        // Given
        const product = { id: 1, name: 'A' };
        const addToCart = jest.fn();

        // When
        const render = shallow(<ProductItem product={product} addToCart={addToCart} />);
        render.find('button').first().simulate('click');

        // Then
        expect(addToCart).toHaveBeenCalledWith(product.id, DEFAULT_ADD_QUANTITY);
    });
    it('should render quantity when product is in the basket', () => {
        // Given
        const product = { id: 1, name: 'A', quantity: 4 };

        // When
        const render = shallow(<ProductItem product={product}  />);
        const title = render.find('span');

        // Then
        expect(title.text()).toContain('4');
    });
    it('should trigger decrement with the right productId when product is in the basket', () => {
        // Given
        const product = { id: 1, quantity: 2, name: 'A' };
        const decrementQuantity = jest.fn();

        // When
        const render = shallow(<ProductItem product={product} decrementQuantity={decrementQuantity} />);
        render.find('button').first().simulate('click');

        // Then
        expect(decrementQuantity).toHaveBeenCalledWith(product.id);
    });
    it('should trigger increment with the right productId when product is in the basket', () => {
        // Given
        const product = { id: 1, quantity: 2, name: 'A' };
        const incrementQuantity = jest.fn();

        // When
        const render = shallow(<ProductItem product={product} incrementQuantity={incrementQuantity} />);
        render.find('button').at(1).simulate('click');

        // Then
        expect(incrementQuantity).toHaveBeenCalledWith(product.id);
    });
    it('should trigger remove with the right productId when product is in the basket', () => {
        // Given
        const product = { id: 1, quantity: 2, name: 'A' };
        const removeFromCart = jest.fn();

        // When
        const render = shallow(<ProductItem product={product} removeFromCart={removeFromCart} />);
        render.find('button').at(2).simulate('click');

        // Then
        expect(removeFromCart).toHaveBeenCalledWith(product.id);
    });

});
