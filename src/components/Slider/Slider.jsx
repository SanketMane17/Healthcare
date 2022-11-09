import React, { useState } from 'react'
import Header from '../Header/Header';
import { BiLeftArrowCircle, BiRightArrowCircle } from "react-icons/bi";
import "./Slider.scss";
import { images } from '../../constants';

const slides = [
    {
        off: 20,
        img: images.healthcare
    },
    { 
        off: 35,
        img: images.healthcare1
    },
    {
        off: 40,
        img: images.healthcare2
    },
    {
        off: 50,
        img: images.healthcare1
    }
]

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goPrev = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const goNext = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    return (
        <div className='app__slider'>
            <button id="prev" onClick={goPrev}>
                <BiLeftArrowCircle />
            </button>
            <Header off={slides[currentIndex].off} img={slides[currentIndex].img}/>
            <button id="next" onClick={goNext}>
                <BiRightArrowCircle />
            </button>
            <div className="app__slider-dots">
                {slides.map((slide, slideIndex) => (
                    <div key={slideIndex} style={slideIndex === currentIndex ? { backgroundColor: "white" } : {}} onClick={() => setCurrentIndex(slideIndex)}></div>
                ))}
            </div>
        </div >
    )
}

export default Slider