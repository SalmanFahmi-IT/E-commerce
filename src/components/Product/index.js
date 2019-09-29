import React from 'react';
import wishlist from '../../assets/svg/wishlist.svg';

const Product = props => (
    <li className="product-list__item">
        <article className="product" itemScope  itemType="http://schema.org/Product">
            <figure className="product__image-wrapper">
                <img className="product__image" src={props.Item.cover_image_url} alt={props.Item.title} itemProp="image"/>
                <button 
                className="product__wishlist-button button button--round button--wishlist"
                style={{background: props.Wishlist.data.includes(props.Item) && '#c9d65c'}}
                >
                    <img src={wishlist} alt='' onClick={() => props.actions.AddToWishlist(props.Item)}/>
                </button>
            </figure>
            <div className="product__details">
                <h1 className="product__title" itemProp="brand">
                    {props.Item.title}
                </h1>
                <p className="product__subtitle" itemProp="description">
                    {props.Item.Description}
                </p>
                <div className="product__price" itemScope  itemType="http://schema.org/Offer">
                    <span className="product__price--strike">
                        {props.Item.retail_price.formatted_value}
                    </span>
                    <span className="product__price--discounted" itemProp="price">
                        {props.Item.discount > 0 ? props.Item.discount : props.Item.retail_price.formatted_value}
                    </span>
                </div>
                <button 
                className="product__add-to-cart button button--primary"
                onClick={() => props.actions.AddToCart(props.Item)}>
                    Add to Cart
                </button>
            </div>
        </article>
    </li>
);

export default Product;