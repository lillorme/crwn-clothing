import React from 'react';
import './Checkout.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Component/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../Component/StripeButton/StripeButton';

const Checkout = (props:any) => {

    const {cartItems, total} = props;
    console.log(props);
    return(
        <div className="checkout-page">
            <div className="checkout-header">
                <div className="header-block">
                    <span>Product</span>
                </div>
                <div className="header-block">
                    <span>Description</span>
                </div>
                <div className="header-block">
                    <span>Quantity</span>
                </div>
                <div className="header-block">
                    <span>Price</span>
                </div>
                <div className="header-block">
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map((cartItem:any, i:number) =>
                    (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                )
            }
            <div className='total'>
                <span>Total: ${total}</span>
            </div>
            <div className="test-warning">
                *Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </div>
            <StripeCheckoutButton
            price={total}

            />
        </div>
    )

}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);