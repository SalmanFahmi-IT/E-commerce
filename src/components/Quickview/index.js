import React from 'react';
import CartListItems from '../Cart';

const Quickview = props => (
    <div>
        <CartListItems {...props}/>
        <hr />
        <p><strong>Total :</strong><small>£ 15000</small></p>
        <button className='btn-checkout'>Proceed to checkout</button>
    </div>
);

export default Quickview;