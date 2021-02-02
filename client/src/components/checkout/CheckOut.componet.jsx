import React from "react";
import "./CheckOut.styles.scss";
import { connect } from "react-redux";
import CheckoutItem from "../checkout-item/CheckOut-Item.component";
import StripeButton from "../stripe-button/stripe-button.component";
import { createStructuredSelector } from "reselect";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selector";

const CheckOut = ({ cartItems, total }) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header-block mobile-header-block">
          <span>Product</span>
        </div>

        <div className="header-block mobile-header-block">
          <span>description</span>
        </div>

        <div className="header-block">
        <span>quantity</span>
      </div>

        <div className="header-block">
          <span>price</span>
        </div>

        <div className="header-block">
          <span>remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className="total">TOTAL: ₹{total}</div>
      <div className="test-warning">
        * please use this creditcard information for any payments (visa card)
        <br />
        4242 4242 4242 4242 - EXP: 01/22 - CVV: 123
      </div>
      <StripeButton price={total} />
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps)(CheckOut);
