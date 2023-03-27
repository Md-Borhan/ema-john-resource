import React from 'react';
import "./Product.css"

const Product = (props) => {
    console.log(props.product);
    const {img, name, price, ratings, seller}  = props.product
    return (
        <div className='product'>
            <img src={img && img} alt="" />
            <div className='product-info'>
                <h6>{name}</h6>
                <p>Price: ${price}</p>
                <p className='manu'>Manufacturer: {seller}</p>
                <p>Rating: {ratings} star</p>
            </div>
            <button className='addCart'>Add to Cart</button>
        </div>
    );
};

export default Product;