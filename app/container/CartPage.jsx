import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';
import { ProductRecommendations } from '../components';
import { addToCart, getRecommendations, removeFromCart, incrementQuantity, decrementQuantity} from '../actions/products';
import { loadCart, getCart } from '../actions/cart';

export class CartPage extends Component {

    constructor(props) {
        super(props);
        const { cart } = this.props;

        props.getRecommendations();
        if (cart.cartId) {
            props.getCart(cart.cartId);
        } else {
            props.loadCart();
        }
        this.addToCart = this.addToCart.bind(this);
        this.removeFromCart = this.removeFromCart.bind(this);
        this.incrementQuantity = this.incrementQuantity.bind(this);
        this.decrementQuantity = this.decrementQuantity.bind(this);
    }

    addToCart(itemId, quantity) {
        this.props.addToCart(itemId, quantity, this.props.cart.cartId);
    }
    
    removeFromCart(itemId){
        this.props.removeFromCart(itemId, this.props.cart.cartId);
    }

    incrementQuantity(itemId){
        this.props.incrementQuantity(itemId, this.props.cart.cartId);
    }

    decrementQuantity(itemId){
        this.props.decrementQuantity(itemId, this.props.cart.cartId);
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
                            <ProductList products={products} addToCart={this.addToCart} removeFromCart={this.removeFromCart} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} />
                        </div>
                        <div className="mr-4">
                            <h2>Product recommendations</h2>
                            <ProductRecommendations products={this.props.recommendations} addToCart={this.addToCart}  removeFromCart={this.removeFromCart} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity}/>
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

export function mapStateToProps({ cart, page, products, recommendations }) {
    return {
        loading: page.loading,
        products,
        cart,
        recommendations
    }
}

export default connect(mapStateToProps, {
    addToCart,
    loadCart,
    getCart,
    getRecommendations,
    removeFromCart,
    incrementQuantity,
    decrementQuantity
})(CartPage);
