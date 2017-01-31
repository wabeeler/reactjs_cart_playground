import React, { Component } from 'react';
import './App.css';

import ItemModel from './items/ItemModel.js';
import ItemList from './items/Items.js';

import CartSnapshot from './cart/cartSnap.js';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cart: []
    };

    this.ItemModel = new ItemModel();

  }

  addToCart(itemId) {
    let found = false;

    this.state.cart.forEach( (item, key) => {
      if( item.id === itemId ) {
        this.state.cart[key].qty += 1;
        found = true;
      }
    });

    if( !found ) {
      this.state.cart.push({'id': itemId, 'qty': 1 });
    }

    console.log("after Cart add", this.state.cart);

    this.setState({'cart': this.state.cart});
  }

  removeFromCart(itemId) {
    this.state.cart.forEach( (item, key) => {
      if( item.id === itemId ) {
        if( item.qty > 1 ) {
          item.qty -= 1;
        }
        else {
          this.state.cart.splice(key, 1);
        }
      }
    });

    this.setState({'cart': this.state.cart});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Golf Cart v. ReactJS</h2>
        </div>
        <CartSnapshot cart={this.state.cart}/>
        <h3>Products:</h3>
        <ItemList items={this.ItemModel.getItemData()} addToCart={this.addToCart.bind(this)}/>
      </div>
    );
  }
}

export default App;
