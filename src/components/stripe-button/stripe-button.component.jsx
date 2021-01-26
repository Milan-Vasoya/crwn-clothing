import React from 'react';
import StripeCheckOut from 'react-stripe-checkout';

const StripCheckOutButton=({price})=>{
    const publishableKey= 'pk_test_51IDTC1JecPfqHVXr73ZXs1r2tiiBbybsAF5645AJanLIFuOOWON0fWvatWB4fMx99OcRPgtSL8jv9rKBAPpoSIbR00wp0StntH';

    const onsTokenSubmission=()=>alert('payment Sucessful')
    return(
        <StripeCheckOut
        label='Pay Now'
        name='crown Clothing'
        billingAddress
        shippingAddress
        image='https://sendeyo.com/up/d/f3eb2117da'
        currency='INR'
        description={`Your total is ₹${price}`}
        amount={price}
        panelLabel='pay now !'
        token={onsTokenSubmission}
       stripeKey={publishableKey}
        />
    );
}

export default StripCheckOutButton;