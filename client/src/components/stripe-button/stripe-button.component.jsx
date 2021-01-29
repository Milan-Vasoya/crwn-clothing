import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import axios from 'axios';

const StripCheckOutButton=({price})=>{
    const publishableKey= 'pk_test_51IDTC1JecPfqHVXr73ZXs1r2tiiBbybsAF5645AJanLIFuOOWON0fWvatWB4fMx99OcRPgtSL8jv9rKBAPpoSIbR00wp0StntH';
    const priceForStripe = price*100;
    const onsTokenSubmission=(token)=>{
        axios({
            url:'payment',
            method:'post',
            data:{
                amount:priceForStripe,
                token
            }
        }).then(response=>{
            alert('payment is successful')
        }).catch((error)=>{
            console.log('request stripe Error', JSON.parse(error))
            alert('there was an issue with your payment, Please make sure you use provided credit card');
        })
    }
    return(
        <StripeCheckOut
        label='Pay Now'
        name='crown Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        description={`Your total is ₹${price}`}
        amount={priceForStripe}
        panelLabel='pay now !'
        currency='INR'
        token={onsTokenSubmission}
       stripeKey={publishableKey}
        />
    );
}

export default StripCheckOutButton;