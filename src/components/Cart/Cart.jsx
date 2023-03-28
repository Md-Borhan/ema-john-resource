import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    let totalCost = 0
    let shippingCost = 0
    for(const product of cart){
        totalCost +=product.price
        shippingCost+=product.shipping
    }
    const tax = totalCost * 7 / 100
    const grandTotal =  totalCost + shippingCost + tax
    return (
        <div className='orderSummary'>
             <h5 style={{fontSize:"18px"}}>Order Summary</h5>
             <p>Cart Items: {cart.length}</p>
             <p>Total Price: ${totalCost}</p>
             <p>Total Shopping Change: ${shippingCost}</p>
             <p>Tax: ${tax.toFixed(2)}</p>
             <h6 style={{fontSize:"18px"}}>Grand Total: ${grandTotal.toFixed(2)}</h6>
        </div>
    );
};
<h5 style={{fontSize:"18px"}}>Order Summary</h5>

export default Cart;