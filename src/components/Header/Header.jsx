import React from "react"
import "./Header.scss";
import Searchbar from "../Searchbar/Searchbar";

function Header({off, img}) {
  return (
    <>
      <div className="app__search-mobile">
        <Searchbar />
      </div>
      <div className='app__header'>
        <div className='app__header-content'>
          <h3>UP TO</h3>
          <div>
            <h1>{off}% OFF</h1>
            <p>On all baby care products sourced from trusted network of verified pharmacies and medical stores </p>
            <button>Buy now</button>
            <span>&gt;</span>
          </div>
        </div>
        <div className='app__header-image'>
          <img src={img} alt="healthcare"/>
        </div>
      </div>
    </>
  )
}

export default Header