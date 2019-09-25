import { combineReducers } from 'redux';
import Cart from '../reducers/Cart';
import Wishlist from '../reducers/Wishlist';
import Products from '../reducers/Product';

export default combineReducers({
    Cart,
    Wishlist,
    Products,
});