export const addItemToCart = (cartItems,cartItemtoadd)=>{

    const existingItems = cartItems.find((cartItem)=>cartItem.id === cartItemtoadd.id);

    if(existingItems){
       return cartItems.map((cartItem)=> cartItem.id ===cartItemtoadd.id?
        {...cartItem,quantity:cartItem.quantity+1}
        :cartItem
        );
    }else{
        return [...cartItems ,{...cartItemtoadd,quantity:1}]
    }
}