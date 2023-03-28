import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([])
    const [cart, setCart] = useState([])

    const handleCart = (product) => {
        const newCart = [...cart, product]
        setCart(newCart)
        addToDb(product.id)
    }
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch('products.json')
            const data = await res.json()
            setProducts(data)
        }
        loadData()
    }, [])

    useEffect(() => {
        const storedCart = getShoppingCart()
        const savedCart = []
        // get the id using added product
        for(const id in storedCart){
            // get product from products state by using id
            const addedProduct = products.find((product) => product.id === id)
            if(addedProduct) {
                // add quantity
                const quantity = storedCart[id]
                addedProduct.quantity = quantity
                // add the added product to the saved cart
                savedCart.push(addedProduct)
            }
            console.log(addedProduct);
        }
        setCart(savedCart)
    }, [products])
    return (
        <div className='shopContainer'>
            <div className="product-container">
                {
                    products.map(product => <Product product={product} key={product.id} handleCart={handleCart}></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;