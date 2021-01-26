import CartActionTypes  from "./cart.type";
export const toggleCartHidden =()=>({
    type:CartActionTypes.TOGGLE_CART_VISIBILITY
});
export const AddCartItem=(cartItem)=>({
    type:CartActionTypes.ADD_ITEM,
    cartItem
})
export const clearItemFromCart= (id)=>({
    type:CartActionTypes.CLEAR_ITEM_FROM_CART,
    id
});
export const removeItemFromCart=(id)=>({
    type:CartActionTypes.REMOVE_ITEM_FROM_CART,
    id
})