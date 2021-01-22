import CartActionTypes  from "./cart.type";
export const toggleCartHidden =()=>({
    type:CartActionTypes.TOGGLE_CART_VISIBILITY
});
export const AddCartItem=(cartItem)=>({
    type:CartActionTypes.ADD_ITEM,
    cartItem
})