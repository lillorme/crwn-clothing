import React from 'react';
import './CartDropDown.css';
import Button from '../Form/Button/Button';
import CartItem from '../CartItem/CartItem';
import {connect} from 'react-redux';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropDown = (props:any) => {

    const {cartItems, history, dispatch} = props;
    
    const buttonClickHandler = () => {
        history.push('/checkout');
        dispatch(toggleCartHidden());
    }

    return(
        <div className="cart-dropdown">
            <div className='cart-items'>
                {
                    cartItems.length ?
             
                    cartItems.map((cartItem:any, i:number) => <CartItem key={i} {...cartItem}/>)

                    :

                    <span className='empty-message'>Your cart is empty</span>

                }
                
            </div>
            <Button onClick={buttonClickHandler}>Go To Checkout</Button>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));

