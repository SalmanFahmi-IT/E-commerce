import React from 'react';
import Product from '../Product';

const Products = ({Products}) => (
    <ul className="product-list">
        {
            Products && Products.map((item, index) => {
            return <Product 
                    key = {item.Id}
                    Image = {item.Image}
                    Title = {item.Title}
                    Description = {item.Description}
                    Price_Strike = {item.Price_Strike}
                    Price_Discounted = {item.Price_Discounted}
                    />
            })
        }
    </ul>
);

export default Products;