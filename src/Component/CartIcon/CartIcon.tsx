import React from 'react';
import { connect } from 'react-redux';
import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';
import {createStructuredSelector} from 'reselect';
import {
    CartContainer,
    ShoppingIcon,
    ItemCountContainer
  } from './cart-icon.styles';

const CartItem = (props:any) => {
    const {toggleCartHidden, itemCount} = props;
    return(
        <CartContainer className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <ItemCountContainer className='item-count'>{itemCount}</ItemCountContainer>
        </CartContainer>
    )
};

const mapDispatchToProps = (dispatch: any) =>({
    toggleCartHidden: () => dispatch(toggleCartHidden())
});

const mapStateToProps = createStructuredSelector({
    itemCount: selectCartItemsCount
});

export default connect(mapStateToProps, mapDispatchToProps)(CartItem);  