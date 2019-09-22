import { combineReducers } from 'redux';
import Cart from '../reducers/Cart';
import Wishlist from '../reducers/Wishlist';
import Product from '../reducers/Product';

export default combineReducers({
    Cart,
    Wishlist,
    Product,
});