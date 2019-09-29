import React from 'react';

const CartItem = props => (
    <li className="cart-item">
        <img alt={props.Item.title} className="product-image" src={props.Item.cover_image_url} />
        <div className="product-info">
            <p className="product-name">{props.Item.title}</p>
            <p className="product-price"><strong>Qty :</strong> {props.Item.Qty}</p>
        </div>
        <span className="product-remove" onClick={() => props.actions.RemoveFromCart(props.Item)}>×</span>
    </li>
);

export default CartItem;
