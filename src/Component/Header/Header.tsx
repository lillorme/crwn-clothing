import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';
import {HeaderContainer, LogoContainer, OptionsContainer, OptionLink, OptionDiv} from './Header.styles';

const Header = (props:any) => {

    const {currentUser, hidden} = props;

    return(
        <HeaderContainer className="header">
            <LogoContainer className="logo-container" to="/">
                <Logo className="logo"/>
            </LogoContainer>
            <OptionsContainer className="options">
                <OptionLink className="option" to='/shop'>Shop</OptionLink>
                <OptionLink className="option" to='/contact'>Contact</OptionLink>
                {
                    currentUser ?
                    <OptionDiv className="option" onClick = {() => auth.signOut()}>Sign Out</OptionDiv>
                    :
                    <OptionLink className="option" to="/signin">Sign In</OptionLink>
                }
                
                <CartIcon />
            </OptionsContainer>
            {
                hidden ? null :
                <CartDropDown/>
            }
            
        </HeaderContainer>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);