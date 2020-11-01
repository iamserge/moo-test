import React from 'react';
import { shallow } from 'enzyme';

import ProductRecommendations from './ProductRecommendations';
import ProductItem from '../ProductItem/ProductItem';

describe('<ProductRecommendations />', () => {

    it('should render a list of products', () => {
        // Given
        const products = [
            { itemId: 1, name: 'A' },
            { itemId: 2, name: 'B' }
        ];

        const addToCart = jest.fn();

        // When
        const render = shallow(<ProductRecommendations products={products} />);
        const listContainer = render.find('.product-recommendations');
        const listItems = render.find(ProductItem);
        
        // Then
        expect(listItems).toHaveLength(2);
        expect(listContainer).toHaveLength(1);

    });


});
