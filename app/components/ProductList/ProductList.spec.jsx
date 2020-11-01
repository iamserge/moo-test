import React from 'react';
import { shallow } from 'enzyme';

import ProductList from './ProductList';
import ProductItem from '../ProductItem/ProductItem';

describe('<ProductList />', () => {

    it('should render a list of products', () => {
        // Given
        const products = [
            { itemId: 1, name: 'A' },
            { itemId: 2, name: 'B' }
        ];

        const addToCart = jest.fn();

        // When
        const render = shallow(<ProductList products={products} />);
        const listContainer = render.find('.list-group');
        const listItems = render.find(ProductItem);
        
        // Then
        expect(listItems).toHaveLength(2);
        expect(listContainer).toHaveLength(1);

    });


});
