import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products, addToCart }) => (
    <div className="mr-4">
        <h2>Products</h2>
        <ul className="list-group">
            {
                products.map(product =>{
                    return (
                       <ProductItem product={product} addToCart={addToCart}/>
                    )
                }) 
            }
        </ul>
    </div>
);

export default ProductList;
