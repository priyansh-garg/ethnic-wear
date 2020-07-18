import React from "react";

import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton=({price})=>{
    const priceForStripe= price*100/75;
    const publishableKey="pk_test_51H2MU9GEoeoKClkgZgiZ6K02SrFMvGD0GFH2JjGf9tEcXiJov2lQrq9g4MtW6VowpojZuNpRR421e2F7PqBwDxj700viYfgZxV";

    const onToken=token=>{
        console.log(token);
        alert("Payment Successful");
    }
    return (
        <StripeCheckout
        label="Pay Now"
        name="Ethnic Tradition"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total amount is ${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
         stripeKey={publishableKey}

         />
    );
};

export default StripeCheckoutButton;