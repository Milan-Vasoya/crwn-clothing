
const IntialState ={
    hidden:true
}

const cartReducer = (state = IntialState, action)=>{
    switch (action.type) {
      case "TOGGLE_CART_VISIBILITY":
        return {
          ...state,
            hidden:!state.hidden
        }
        
    
      default:
        return state;
    }
  }

  export default cartReducer;
