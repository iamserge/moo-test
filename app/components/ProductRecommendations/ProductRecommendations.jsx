import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductRecommendations = ({ products, addToCart }) => (
    <div className="product-recommendations">
        {
            products.map(product =>{
                return (
                    <ProductItem product={product} addToCart={addToCart}/>
                )
            }) 
        }
    </div>
);

export default ProductRecommendations;
