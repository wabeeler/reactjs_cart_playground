import React from 'react';
import ItemModel from '../items/ItemModel.js';

export default class CartShapshot extends React.Component {
  constructor(props) {

    super(props);

    this.ItemModel = new ItemModel();
  }

  qtyTotal() {
    let qty = 0;
    this.props.cart.forEach( (item) => {
      console.log("Qty Item", item);
      qty += item.qty;
    });

    return qty;
  }

  cartTotal() {
    let total = 0;
    this.props.cart.forEach( (item) => {
      let itemObj = this.ItemModel.getItemById(item.id);

      console.log("CTotal", item, itemObj);

      total += (item.qty * itemObj.price);
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
        <div className="cart-snap-item-count">Items {cartData.length}</div>
        <div className="cart-snap-qty-total">Count {this.qtyTotal()}</div>
        <div className="cart-snap-price-total">Total {this.cartTotal()}</div>
      </div>
    );
  }
}
