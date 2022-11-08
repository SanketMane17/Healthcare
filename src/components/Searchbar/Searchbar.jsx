import React, {useState} from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import {BsSearch} from "react-icons/bs";
import "./Searchbar.scss";

function Searchbar() {
    const [isPincodeSet, setIsPincode] = useState(false);
  return (
    <div className="search">
    <div className="location">
        <HiOutlineLocationMarker className={isPincodeSet && "default-color"} />
        <button onClick={() => setIsPincode(true)}>Pincode</button>
    </div>
    <div className="vertical-line" />
    <form action="#">
        <input type="text"
            placeholder="search"
            name="search" />
        <BsSearch className="default-color" />
    </form>
</div>
  )
}

export default Searchbar;