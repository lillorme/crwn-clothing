import React from 'react';
import './Button.css';

const Button = (props:any) => {

    const {children, isGoogleSignIn, inverted, ...otherProps } = props

    return(

        <button className={`
        ${inverted ? 'inverted' : ''}
        ${isGoogleSignIn ? 'google-sign-in' : ''} 
        custom-button`} {...otherProps}>
            {children}
        </button>

    )

}

export default Button;