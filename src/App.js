import React, { Component } from 'react';
import './App.css';

import ItemList from './items/Items.js';
import CartSnapshot from './cart/cartSnap.js';

class App extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Golf Cart v. ReactJS</h2>
        </div>
        <CartSnapshot />
        <h3>Products:</h3>
        <ItemList/>
      </div>
    );
  }
}

export default App;
