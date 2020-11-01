import React from 'react';
import { DEFAULT_ADD_QUANTITY } from '../../constants';

const ProductItem = ({ product, addToCart, removeFromCart, decrementQuantity, incrementQuantity }) => {
    const inBasket = typeof product.quantity !== 'undefined';
    const  id = product.itemId ? product.itemId : product.id;
    return (
        <div className="list-group-item d-flex justify-content-between" key={id}>
            <h3 className="product-name">Product {id}</h3>
            { inBasket ? (
                <div>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => decrementQuantity(id)}>-</button>
                    <span>{product.quantity}</span>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => incrementQuantity(id)}>+</button>
                    <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => removeFromCart(id)}>Remove</button>
                </div>
            ) : (
                <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => addToCart(id, DEFAULT_ADD_QUANTITY)}>Add</button>
            )}
            
        </div>
    )
}
    

export default ProductItem;
