import React from 'react';
import CartItem from './cartItem';

const CartListItems = props => (
    <ul className="cart-items">
        { 
            props.Cart && props.Cart.data.map((item, index) => (
                <CartItem key={index} Item={item} {...props}/>
            ))
        }
    </ul>
);
export default CartListItems;