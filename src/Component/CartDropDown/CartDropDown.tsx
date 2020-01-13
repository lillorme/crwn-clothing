import React from 'react';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import {
    CartDropdownContainer,
    CartDropdownButton,
    EmptyMessageContainer,
    CartItemsContainer
  } from './cart-dropdown.styles';

const CartDropDown = (props:any) => {

    const {cartItems, history, dispatch} = props;
    
    const buttonClickHandler = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return(
        <CartDropdownContainer className="cart-dropdown">
            <CartItemsContainer className='cart-items'>
                {
                    cartItems.length ?
             
                    cartItems.map((cartItem:any, i:number) => <CartItem key={i} {...cartItem}/>)

                    :

                    <EmptyMessageContainer className='empty-message'>Your cart is empty</EmptyMessageContainer>

                }
                
            </CartItemsContainer>
            <CartDropdownButton onClick={buttonClickHandler}>Go To Checkout</CartDropdownButton>
        </CartDropdownContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

