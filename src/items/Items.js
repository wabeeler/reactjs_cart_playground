import React from 'react';

export default class ItemList extends React.Component {
  render() {
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
                <button className="btn-cart" onClick={() => this.props.addToCart(item.id)}>Add to Cart</button>
              </div>
            </li>
          );
          }
        )}
      </ul>
    )
  }
}
