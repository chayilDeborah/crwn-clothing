import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51LDPvvASM4JdVfpFxNrjZL7CIUpvBSvumAF9WfAJ0Wr3hJCYgTJqM5OVOwv8gTIdcy9qpkNivMkRxHyojowGMGdl009dUetPa1';

    const onToken = token => {
        console.log(token);
        alert('payment Successful');
    }

    return (
        <StripeCheckout 
        label='Pay Now'
        name='CRWN CLOTHING Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        />
    );
};
export default StripeCheckoutButton;
