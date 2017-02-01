import {combineReducers, createStore} from 'redux';

import itemReducer from './reducers/itemReducer';
import cartReducer from './reducers/cartReducer';

const reducers = combineReducers({
  items: itemReducer,
  cart: cartReducer
});

export default createStore(reducers);
