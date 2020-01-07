import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../CartIcon/CartIcon';
import CartDropDown from '../CartDropDown/CartDropDown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

const Header = (props:any) => {

    const {currentUser, hidden} = props;

    return(
        <div className="header">
            <Link className="logo-container" to="/">
                <Logo className="logo"/>
            </Link>
            <div className="options">
                <Link className="option" to='/shop'>Shop</Link>
                <Link className="option" to='/contact'>Contact</Link>
                {
                    currentUser ?
                    <div className="option" onClick = {() => auth.signOut()}>Sign Out</div>
                    :
                    <Link className="option" to="/signin">Sign In</Link>
                }
                
                <CartIcon />
            </div>
            {
                hidden ? null :
                <CartDropDown/>
            }
            
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);