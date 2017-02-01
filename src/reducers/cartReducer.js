export default function reducer(
  state = {
    cart: {}
  },
  action ) {
  
  console.log("Cart init", state);

  switch( action.type ) {
    case "CART_ADD" :
      let id = action.payload.itemId;

      if( state.cart.hasOwnProperty(id) ) {
        let qty = state.cart[id];
        return {...state, cart: {...state.cart, [id]: (qty + 1)}}
      }
      else {
        return {...state, cart: {...state.cart, [id]: 1}};
        
      }
      break;

    case "CART_REMOVE" :
      break;

  }

  return state;
}
