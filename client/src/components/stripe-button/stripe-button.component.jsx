import React from "react";
import axios  from "axios";
import StripeCheckout from "react-stripe-checkout";
const StripeCheckoutButton=({price})=>{
    const priceForStripe= price*100;
    const publishableKey="pk_test_51H2MU9GEoeoKClkgZgiZ6K02SrFMvGD0GFH2JjGf9tEcXiJov2lQrq9g4MtW6VowpojZuNpRR421e2F7PqBwDxj700viYfgZxV";

    const onToken = token => {
        axios({
          url: 'payment',
          method: 'post',
          data: {
            amount: priceForStripe,
            token: token
          }
        })
          .then(response => {
            alert('succesful payment');
          })
          .catch(error => {
            console.log('Payment Error: ', error);
            alert(
              'There was an issue with your payment! Please make sure you use the provided credit card.'
            );
          });
      };
      return (
        <StripeCheckout
        label="Pay Now"
        name="Ethnic Tradition"
        billingAddress
        shippingAddress
        image="https://svgshare.com/i/CUz.svg"
        description={`Your total amount is ${price}`}
        amount={priceForStripe}
        currency="inr"
        panelLabel="Pay Now"
        token={onToken}
         stripeKey={publishableKey}

         />
    );
};

export default StripeCheckoutButton;