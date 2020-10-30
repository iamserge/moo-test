import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products, addToCart }) => (
    <div className="list-group">
        {
            products.map(product =>{
                return (
                    <ProductItem product={product} addToCart={addToCart}/>
                )
            }) 
        }
    </div>
);

export default ProductList;
