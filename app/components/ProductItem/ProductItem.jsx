import React from 'react';

const ProductItem = ({ product, addToCart, removeFromCart, decrementQuantity, incrementQuantity }) => {
    const inBasket = typeof product.quantity !== 'undefined';
    const productId = product.itemId ? product.itemId : product.id;
    return (
        <div className="list-group-item d-flex justify-content-between" key={product.name}>
            <h3 className="product-name">Product {productId}</h3>
            { inBasket ? (
                <div>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => decrementQuantity(productId)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => incrementQuantity(productId)}>+</button>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => removeFromCart(productId)}>Remove</button>
                </div>
            ) : (
                <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => addToCart(product.id, 1)}>Add</button>
            )}
            
        </div>
    )
}
    

export default ProductItem;
