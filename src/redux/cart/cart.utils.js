export const addItemToCart = (cartItems, cartItemtoadd) => {
  const existingItems = cartItems.find(
    (cartItem) => cartItem.id === cartItemtoadd.id
  );

  if (existingItems) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemtoadd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  } else {
    return [...cartItems, { ...cartItemtoadd, quantity: 1 }];
  }
};

export const removeItemFromCart = (cartItems, id) => {
  const existingItems = cartItems.find((cartItem) => cartItem.id === id);
  if (existingItems.quantity > 1) {
    return cartItems.map((cartItem) =>
      cartItem.id === id
        ? {
            ...cartItem,
            quantity: cartItem.quantity - 1,
          }
        : 
            cartItem,
          
    );
  }else{
      return cartItems.filter((cartItem)=>cartItem.id !== id)
  }
};
