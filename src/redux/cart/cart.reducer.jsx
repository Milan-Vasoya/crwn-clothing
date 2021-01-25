import CartActionTypes  from "./cart.type"; 
import { addItemToCart, removeItemFromCart } from "./cart.utils";
const IntialState ={
    hidden:true,
    cartItems:[]
}

const cartReducer = (state = IntialState, action)=>{
    switch (action.type) {
      case CartActionTypes.TOGGLE_CART_VISIBILITY:
        return {
          ...state,
            hidden:!state.hidden
        }
        
        case CartActionTypes.ADD_ITEM:
          return{
            ...state,
            cartItems:addItemToCart(state.cartItems,action.cartItem)

          }
        case CartActionTypes.CLEAR_ITEM_FROM_CART:
          return {
            ...state,
            cartItems:state.cartItems.filter((cartItem)=>cartItem.id !== action.id)
          }
          case CartActionTypes.REMOVE_ITEM_FROM_CART:
            return{
              ...state,
              cartItems:removeItemFromCart(state.cartItems,action.id)
            }
            default:
        return state;
    }
  }

  export default cartReducer;
