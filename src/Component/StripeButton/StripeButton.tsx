import React from 'react';
import './StripeButton.css';
import StripeCheckout from 'react-stripe-checkout';
import {ReactComponent as Logo} from '../../assets/crown.svg';
const StripeCheckoutButton = (props:any) =>{

    const {price} = props;

    const priceForStripe = price * 100;
    const publishable = 'pk_test_Lef6gud32mRynaeC942dSvl700QNBwfY34';
    const onToken = (token:any) =>{
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label='Pay Now'
            name = 'CRWN Clothin Ltd.'
            shippingAddress
            billingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is $${price}`} // the pop-in header subtitle
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey = {publishable}
        />
    )

}

export default StripeCheckoutButton;