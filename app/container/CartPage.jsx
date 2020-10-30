import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';
import { ProductRecommendations } from '../components';
import { addToCart } from '../actions/products';
import { loadCart, getCart } from '../actions/cart';
const recommendationProducts = [
    { name: 'A', id: 1, price: 12},
    { name: 'B', id: 2, price: 15},
    { name: 'C', id: 3, price: 50},
]
export class CartPage extends Component {

    constructor(props) {
        super(props);
        const { cart } = this.props;

        if (cart.cartId) {
            props.getCart(cart.cartId);
        } else {
            props.loadCart();
        }
        
        this.addToCart = this.addToCart.bind(this);
    }

    addToCart(itemId, quantity) {
        this.props.addToCart(itemId, quantity, this.props.cart.cartId);
    }

    render() {
        const { loading, products, cart } = this.props;
        if (loading) {
            return <div> Loading your cart </div>;
        }

        return (
            <div className="container">
                <header className="mt-5 mb-5">
                    <h1>Shopping Cart</h1>
                </header>
                <main className="row">
                    <section className="col">
                        <div className="mr-4">
                            <h2>Products</h2>
                            <ProductList products={products} addToCart={this.addToCart} />
                        </div>
                        <div className="mr-4">
                            <h2>Product recommendations</h2>
                            <ProductRecommendations products={recommendationProducts} addToCart={this.addToCart} />
                        </div>
                    </section>
                    <section className="col">
                        {/* Cart */}
                    </section>
                </main>
            </div>
        )
    }

}

export function mapStateToProps({ cart, page, products }) {
    return {
        loading: page.loading,
        products,
        cart,
    }
}

export default connect(mapStateToProps, {
    addToCart,
    loadCart,
    getCart
})(CartPage);
