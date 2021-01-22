import CartActionTypes  from "./cart.type"; 
import { addItemToCart } from "./cart.utils";
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
        case 'INITIAL':
          return IntialState;
      default:
        return state;
    }
  }

  export default cartReducer;
