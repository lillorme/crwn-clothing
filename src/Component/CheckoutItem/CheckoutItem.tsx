import React from 'react';
import './CheckoutItem.css';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';
import { clearItemFromCart, addItem, removeItem } from '../../redux/cart/cart.actions';

    import { format } from 'path';
const CheckoutItem = (props:any) => {

    const { cartItem, clearItem, addItem, removeItem } = props;
    const { name, imageUrl, price, quantity } = cartItem;

    const clearItemHandler = () => {
        clearItem(cartItem);
    }

    const removeItemHandler = () => {
        removeItem(cartItem);
    }

    const addItemHandler = () => {
        addItem(cartItem);
    }

    return(
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" />
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={removeItemHandler}>&#10094;</div>
                    <span className="value">{quantity}</span>
                <div className="arrow" onClick={addItemHandler}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <span className="remove-button" onClick={clearItemHandler}>&#10005;</span>
        </div>
    )

}

const mapDispatchToProps = (dispatch:any) => ({
    clearItem: (item:any) => dispatch(clearItemFromCart(item)),
    addItem: (item:any) => dispatch(addItem(item)),
    removeItem: (item:any) => dispatch(removeItem(item)),
});

export default connect(null, mapDispatchToProps)(CheckoutItem);