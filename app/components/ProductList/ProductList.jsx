import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductList = ({ products, addToCart, removeFromCart, incrementQuantity, decrementQuantity }) => (
    <div className="list-group">
        {
            products.map(product =>{
                return (
                    <ProductItem key={product.id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity}/>
                )
            }) 
        }
    </div>
);

export default ProductList;
