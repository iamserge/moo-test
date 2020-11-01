import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

const ProductRecommendations = ({ products, addToCart, removeFromCart, incrementQuantity, decrementQuantity }) => (
    <div className="product-recommendations">
        {
            products.map(product =>{
                const  id = product.itemId ? product.itemId : product.id;
                return (
                    <ProductItem key={id} product={product} addToCart={addToCart} removeFromCart={removeFromCart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} />
                )
            }) 
        }
    </div>
);

export default ProductRecommendations;
