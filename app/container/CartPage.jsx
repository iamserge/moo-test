import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';

import { addToCart } from '../actions/products';
import { loadCart } from '../actions/cart';

export class CartPage extends Component {

    constructor(props) {
        super(props);
        props.loadCart();
        this.addToCart = this.addToCart.bind(this);
    }
    addToCart(itemId, quantity) {
        this.props.addToCart(itemId, quantity, this.props.cart.id);
    }

    render() {
        const { isLoading, products, cart } = this.props;

        if (isLoading) {
            return <div> Loading your cart </div>;
        }

        return (
            <div className="container">
                <header className="mt-5 mb-5">
                    <h1>Shopping Cart</h1>
                </header>
                <main className="row">
                    <section className="col">
                        <ProductList products={products} addToCart={this.addToCart} />
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
    loadCart
})(CartPage);
