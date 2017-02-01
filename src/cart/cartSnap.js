import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    items: store.items.items,
    cart: store.cart.cart
  }
})
export default class CartShapshot extends React.Component {

  qtyTotal() {
    let qtyTotal = 0;
    Object.keys(this.props.cart).forEach( (id) => {
      let qty = this.props.cart[id];
      qtyTotal += qty;
    });

    return qtyTotal;
  }

  cartTotal() {
    let total = 0;
    Object.keys(this.props.cart).forEach( (itemId) => {
      let qty = this.props.cart[itemId];
      let itemObj;

      this.props.items.some((item) => {
        itemObj = item;
        // Using == instead of === because itemId is type string and item.id is numeric
        return item.id == itemId;
      });

      total += (qty * itemObj.price);
    });

    let formatter = new Intl.NumberFormat('en-US', {
       style: 'currency',
       currency: 'USD',
       minimumFractionDigits: 2,
    }); 

    return formatter.format(total);
  }

  render() {
    const cartData = this.props.cart;

    return (
      <div className="cart-snap-container">
        <div className="cart-snap-item-count">Unique Items {Object.keys(cartData).length}</div>
        <div className="cart-snap-qty-total">Total Item Count {this.qtyTotal()}</div>
        <div className="cart-snap-price-total">Cart Total {this.cartTotal()}</div>
      </div>
    );
  }
}
