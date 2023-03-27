import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])

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
                    products.map(product => <Product product={product} key={product.id}></Product>)
                }
            </div>
            <div className="cart-container">
                <h2>Cart container</h2>
            </div>
        </div>
    );
};

export default Shop;