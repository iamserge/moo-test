import React from 'react';

const ProductItem = ({ product, addToCart }) => {
    return (
        <div className="list-group-item d-flex justify-content-between" key={product.name}>
            <span>{product.name}</span>
            <button className="btn btn-outline-primary btn-sm" type="button" onClick={() => addToCart(product.id, 1)}>Add</button>
        </div>
    )
}
    

export default ProductItem;
