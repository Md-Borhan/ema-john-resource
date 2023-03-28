import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
    }
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data)
        }
        loadData()
    }, [])
    return (
        <div className='shopContainer'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <h5>Order Summary</h5>
                <p>Cart Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;