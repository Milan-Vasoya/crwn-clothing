import React from "react";
import "./cart.dropdown.styles.scss";
import {  connect} from "react-redux";
import CartItem from "../cart-item/cari-iteam.component";

const CartDropDown = ({cartItems})=>(
    <div className='cart-dropdown '>
    <div className='cart-items'>
    {
        cartItems.map((item)=><CartItem key={item.id} item={item} />)
    }
    </div>
    <button className='black-button'>GO To CHECKOUT</button>
    </div>
)


const mapStateToProps = ({cart: {cartItems}})=> ({
    cartItems
});
export default connect(mapStateToProps)(CartDropDown);