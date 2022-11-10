import React, { useState } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { productList } from "../../Data";
import "./Searchbar.scss";

function Searchbar({ products, setProducts }) {
  const [isPincodeSet, setIsPincode] = useState(false);
  const [debounceTimeout, setDebounceTimeout] = useState("");

  const debounceSearch = (e, debounceTimeout) => {
    const value = e.target.value;
    if (debounceTimeout) {
      clearTimeout(debounceTimeout);
    }

    const timeout = setTimeout(() => {
      searchFilter(value);
    }, 500);
    setDebounceTimeout(timeout);
  };

  const searchFilter = (searchKey) => {
    if (!searchKey) {
      setProducts(productList);
    } else {
      const searchItems = products.filter(product => {
        return product.name.search(new RegExp(searchKey, "i")) !== -1;
      });

      setProducts(searchItems);
    }
  };

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
          name="search" onKeyUp={(e) => debounceSearch(e, debounceTimeout)} />
        <BsSearch className="default-color" />
      </form>
    </div>
  )
}

export default Searchbar;