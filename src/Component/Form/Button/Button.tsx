import React from 'react';
import {CustomButtonContainer } from './button.styles';

const Button = (props:any) => {

    const {children, ...otherProps } = props

    return(

        <CustomButtonContainer  {...otherProps}>
            {children}
        </CustomButtonContainer>

    )

}

export default Button;