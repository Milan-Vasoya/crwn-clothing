import React from "react";
import { AddCartItem } from "../../redux/cart/cart.action";
import { connect } from "react-redux";

const CollectionItem = ({ item, addItemToCart }) => {
  const { name, price, imageUrl}= item
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <button onClick={()=>addItemToCart(item)} className="black-button inverted uniqe">ADD TO CART</button>
    </div>
  );
};
const mapDispatchToProps =(dispatch)=>({
  addItemToCart: (item)=>dispatch(AddCartItem(item))
})
export default connect(undefined,mapDispatchToProps)(CollectionItem);
