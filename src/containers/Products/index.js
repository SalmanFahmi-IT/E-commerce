import React from 'react';
import Product from '../../components/Product';

const Products = props => (
    <ul className="product-list">
        {
            props.Products.data && props.Products.data.map((item, index) => {
            return <Product 
                    key = {item.uuid}
                    Item = {item}
                    {...props}
                    />
            })
        }
    </ul>
);

export default (Products);