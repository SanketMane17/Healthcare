import { Rating } from '@mui/material';
import React from 'react'
import { AiOutlineShoppingCart } from "react-icons/ai";
import "./Product.scss";

function Product({product}) {
    const {imgLink, name, stars, ratings, price, discount} = product;
    
    return (
        <div className='app__card'>
            <div className="promoted">PROMOTED</div>
            <div className="discount">{discount}% off</div>
            <div className="vector"></div>
            <div className="app__card-header">
                <img src={imgLink} alt={name} />
            </div>
            <div className="app__card-body">
                <p>{name}</p>

                <div>
                    <div className="rating">
                        <Rating name="half-rating-read" value={stars} precision={0.5} readOnly />
                        <p>{ratings} Rating</p>
                    </div>
                    <button>
                        <AiOutlineShoppingCart />
                        <span>₹{price}</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Product