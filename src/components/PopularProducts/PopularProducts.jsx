import React from 'react'
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import images from '../../constants/images';
import { Product } from "../../components";
import "./PopularProducts.scss";

const data = [
    {
        imgLink: images.medicine5,
        name: "Kee PharmImmune Smart Capsule 60's",
        stars: 4.5,
        ratings: 1111,
        price: 455,
        discount: 67,
        category: "Covid-19 Preventatives",
        brand: "KeepSafe"
    },
    {
        imgLink: images.medicine6,
        name: "SBL Alfalfa Tonic Paediatric",
        stars: 2.5,
        ratings: 110,
        price: 149,
        discount: 33,
        category: "Food & Nutrition",
        brand: "Stayfree"
    }, {
        imgLink: images.medicine1,
        name: "Kee PharmImmune Smart Capsule 60's",
        stars: 4.5,
        ratings: 2827,
        price: 389.25,
        discount: 12,
        category: "Covid-19 Preventatives",
        brand: "N95 Mask"
    },
    {
        imgLink: images.medicine2,
        name: "SBL Alfalfa Tonic Paediatric",
        stars: 4.5,
        ratings: 110,
        price: 149,
        discount: 33,
        category: "Food & Nutrition",
        brand: "Savlon"
    },
    {
        imgLink: images.medicine4,
        name: "Dr. Reckeweg Silicea Dilution 200",
        stars: 4.6,
        ratings: 2300,
        price: 160,
        discount: 45,
        category: "Personal Hygiene",
        brand: "Dr Rhazes"
    },
    {
        imgLink: images.medicine5,
        name: "Wheezal Baby Bliss Syrup",
        stars: 3.8,
        ratings: 1250,
        price: 350,
        discount: 55,
        category: "Immunity Boosters",
        brand: "KeepSafe"
    },
    {
        imgLink: images.medicine6,
        name: "SBL Kalmegh Paediatric Drop",
        stars: 4.1,
        ratings: 1153,
        price: 350,
        discount: 9,
        category: "Covid-19 Preventatives",
        brand: "Stayfree"
    },
    {
        imgLink: images.medicine7,
        name: "Losartan",
        stars: 3,
        ratings: 245,
        price: 123.45,
        discount: 56,
        category: "Immunity Boosters",
        bradn: "3M"
    },
];

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
                {data.map((product, index) => (
                    <Product product={product} key={index} />
                ))}
            </div>
        </div>
    )
}

export default PopularProducts