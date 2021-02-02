import React from "react";
import "./CheckOut-Item.styles.scss";
import { connect } from "react-redux";
import {
  clearItemFromCart,
  removeItemFromCart,
  AddCartItem,
} from "../../redux/cart/cart.action";

const CheckoutItem = ({
  cartItem,
  clearCartItem,
  removeCartItem,
  addCartItem,
}) => {
  const { id, name, imageUrl, price, quantity } = cartItem;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <div className='otherItems'>
        <span className="name">{name}</span>
        <span className="quantity">
          <div className="arrow" onClick={() => removeCartItem(id)}>
            &#10094;
          </div>
          <span className="value">{quantity}</span>
          <div className="arrow" onClick={() => addCartItem(cartItem)}>
            &#10095;
          </div>
        </span>
        <span className="price">₹{price}</span>
        <div className="remove-button" onClick={() => clearCartItem(id)}>
          &#10005;
        </div>
      </div>
    </div>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearCartItem: (id) => dispatch(clearItemFromCart(id)),
  removeCartItem: (id) => dispatch(removeItemFromCart(id)),
  addCartItem: (item) => dispatch(AddCartItem(item)),
});
export default connect(undefined, mapDispatchToProps)(CheckoutItem);
