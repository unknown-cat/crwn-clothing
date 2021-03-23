import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51IXs8aK4eCbXFCqNk4h5QFCnykajnkRp10W6ANq4AcTxOqskflubne9s2Ro5R20ZaAWAiLB7NYrCztOEtqWBN2Fz00VU4omWGH';

  const onToken = token => {
    console.log(token);
    alert('Payment Successful')
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing ltd."
      billingAddresss
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      discription={ `Your total is $${ price }` }
      amount={ priceForStripe }
      panelLabel="Pay Now"
      token={ onToken }
      stripeKey={ publishableKey }/>
  )
};

export default StripeCheckoutButton;