import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import CheckoutItem from '../../Component/CheckoutItem/CheckoutItem';
import StripeCheckoutButton from '../../Component/StripeButton/StripeButton';
import {
    CheckoutPageContainer,
    CheckoutHeaderContainer,
    HeaderBlockContainer,
    TotalContainer,
    WarningContainer
  } from './checkout.styles';

const Checkout = (props:any) => {

    const {cartItems, total} = props;
    console.log(props);
    return(
        <CheckoutPageContainer className="checkout-page">
            <CheckoutHeaderContainer className="checkout-header">
                <HeaderBlockContainer className="header-block">
                    <span>Product</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>Description</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>Quantity</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>Price</span>
                </HeaderBlockContainer>
                <HeaderBlockContainer className="header-block">
                    <span>Remove</span>
                </HeaderBlockContainer>
            </CheckoutHeaderContainer>
            {
                cartItems.map((cartItem:any, i:number) =>
                    (
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    )
                )
            }
            <TotalContainer className='total'>
                <span>Total: ${total}</span>
            </TotalContainer>
            <WarningContainer className="test-warning">
                *Please use the following test credit card for payment
                <br />
                4242 4242 4242 4242 - Exp: 01/20 - CVV: 123
            </WarningContainer>
            <StripeCheckoutButton
            price={total}

            />
        </CheckoutPageContainer>
    )

}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems,
    total: selectCartTotal
});

export default connect(mapStateToProps)(Checkout);