import React from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { Product } from "../../components";
import "./PopularProducts.scss";
import popularPrdoucts from '../../Data/popularProducts';

function PopularProducts() {

    return (
        <div className='app__popular'>
            <div className='header'>
                <h1>Popular Healthcare Products &gt;</h1>
                <div className='arrows'>
                    <BsArrowLeft className='left' />
                    <BsArrowRight className='right' />
                </div>
            </div>
            <div className='list'>
                {popularPrdoucts.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PopularProducts