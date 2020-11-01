import React, { Component } from 'react';
import { connect } from 'react-redux'

import { ProductList } from '../components';
import { ProductRecommendations } from '../components';
import { addToCart, getRecommendations, removeFromCart, incrementQuantity, decrementQuantity } from '../actions/products';
import { loadCart, getCart, clearCart } from '../actions/cart';

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
        const { recommendations } = this.props;
        return (
            <div className="container">
                <header className="mt-5 mb-5">
                    <h1>
                        Shopping Cart
                        <button className="btn btn-outline-primary btn-sm clear-button" type="button" onClick={()=>{this.props.clearCart(cart.cartId)}}>Clear cart</button>
                    </h1>
                </header>
                <main>
                    <section>
                        <div>
                            <h2>
                                Products
                                {products.length > 0 && (
                                    <span>{products.length}</span>
                                )}
                            </h2>
                            {products.length > 0 ? (
                                <ProductList products={products} addToCart={this.addToCart} removeFromCart={this.removeFromCart} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity} />
                            ) : (
                                <div className="empty">Your shopping bag is empty. You can add from the products recommendations section.</div>
                            )}
                            
                        </div>
                        <div id="product-recommendations">
                            <h2>
                                Product recommendations
                                {recommendations.length > 0 && (
                                    <span>{recommendations.length}</span>
                                )}
                            </h2>
                            <ProductRecommendations products={recommendations} addToCart={this.addToCart}  removeFromCart={this.removeFromCart} incrementQuantity={this.incrementQuantity} decrementQuantity={this.decrementQuantity}/>
                        </div>
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
    decrementQuantity,
    clearCart
})(CartPage);
