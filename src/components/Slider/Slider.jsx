import React, { useState } from 'react'
import Header from '../Header/Header';
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "./Slider.scss";
import heroSlides from '../../Data/slides';

function Slider({ products, setProducts }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? heroSlides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goNext = () => {
        const isLastSlide = currentIndex === heroSlides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className='app__slider'>
            <button id="prev" onClick={goPrev}>
                <BiLeftArrowCircle />
            </button>
            <Header
                off={heroSlides[currentIndex].off}
                img={heroSlides[currentIndex].img}
                products={products}
                setProducts={setProducts}
            />
            <button id="next" onClick={goNext}>
                <BiRightArrowCircle />
            </button>
            <div className="app__slider-dots">
                {heroSlides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={slideIndex === currentIndex ? { backgroundColor: "white" } : {}} onClick={() => setCurrentIndex(slideIndex)}></div>
                ))}
            </div>
        </div >
    )
}

export default Slider