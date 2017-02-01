import React from 'react';
import {connect} from 'react-redux';

@connect((store) => {
  return {
    // this is because the reducer and the property have the same name
    items: store.items.items
  };
})
export default class ItemList extends React.Component {
  render() {
    console.log("Props", this.props);
    const items = this.props.items;

    return (
      <ul>
        {items.map(item => {
          return (
            <li key={item.id}>
              <div className="item">
                <h5 className="product">{item.product}</h5>
                <div className="price">{item.price}</div>
              </div>
              <div className="btn-container">
                <button className="btn-cart" onClick={() => this.addCartAction(item.id)}>Add to Cart</button>
              </div>
            </li>
          );
          }
        )}
      </ul>
    )
  }

  // probably better to centralize this, but leaving for this small project
  addCartAction(itemId) {
    this.props.dispatch({
      'type': 'CART_ADD',
      'payload': { itemId: itemId }
    });
  }
}
