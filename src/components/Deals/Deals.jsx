import React from 'react';
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import "./Deals.scss";

function Deals() {
  return (
    <div className='app__deals'>
      <div className='header'>
        <h1>Best Deals &gt;</h1>
        <div className='arrows'>
          <BsArrowLeft className='left' />
          <BsArrowRight className='right' />
        </div>
      </div>
      <div className="list">
        <div className="card-1">
          <h2>Best Deals! Save 20% on your cart</h2>
          <p>Get yourself cured at best budget at your home</p>
          <button>
            <span>SHOP NOW</span>
            <BsArrowRight />
          </button>
        </div>
        <div className="card-2">
          <h2>Offers on all medicines</h2>
          <button>
            <span>SHOP NOW</span>
            <BsArrowRight />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Deals