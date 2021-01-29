import React from "react";
import { withRouter } from "react-router-dom";
import "./cart.dropdown.styles.scss";
import { connect } from "react-redux";
import CartItem from "../cart-item/cari-iteam.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from "../../redux/cart/cart.action";

const CartDropDown = ({ cartItems, history, dispatch }) => {

  return (
    <div className="cart-dropdown ">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <button
        className="black-button"
        onClick={() => {
          dispatch(toggleCartHidden());
          history.push('/checkout');
        }}
      >
        GO To CHECKOUT
      </button>
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropDown));
