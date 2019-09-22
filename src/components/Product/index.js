import React from 'react';
import wishlist from '../../assets/svg/wishlist.svg';

const Product = ({
    Image, 
    Title, 
    Description, 
    Price_Strike,
    Price_Discounted
}) => (
    <li className="product-list__item">
        <article className="product" itemScope  itemType="http://schema.org/Product">
            <figure className="product__image-wrapper">
                <img className="product__image" src={Image} alt={Title} itemProp="image"/>
                <button className="product__wishlist-button button button--round button--wishlist">
                    <img src={wishlist} alt=''/>
                </button>
            </figure>
            <div className="product__details">
                <h1 className="product__title" itemProp="brand">{Title}</h1>
                <p className="product__subtitle" itemProp="description">{Description}</p>
                <div className="product__price" itemScope  itemType="http://schema.org/Offer">
                    <span className="product__price--strike">{`£ ${Price_Strike}`}</span>
                    <span className="product__price--discounted" itemProp="price">{`£ ${Price_Discounted}`}</span>
                </div>
                <button className="product__add-to-cart button button--primary">Add to Cart</button>
            </div>
        </article>
    </li>
);

export default Product;