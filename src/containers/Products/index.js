import React from 'react';
import Product from '../../components/Product';

const Products = ({Products, handleClick}) => (
    <ul className="product-list">
        {
            Products && Products.map((item, index) => {
            return <Product 
                    key = {item.Id}
                    Item = {item}
                    handleClick={handleClick}
                    />
            })
        }
    </ul>
);

export default (Products);