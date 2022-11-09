import React, { useEffect, useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Product, Accordion } from '..';
import "./Products.scss";

import { productList } from "../../Data";
import { accordionData } from "../../Data";
import { brands } from "../../Data";

function Products() {
    const [products, setProducts] = useState(productList);
    const [selectedCategory, setSelectedCategory] = useState("Food & Nutrition");
    const [sorting, setSorting] = useState("#");

    const handleChange = (e) => {
        setSorting(e.target.value);
    }

    if (sorting === "popularity") {
        products.sort((obj1, obj2) => obj1.ratings - obj2.ratings);
    }

    if (sorting === "discount") {
        products.sort((obj1, obj2) => obj1.discount - obj2.discount);
    }

    if (sorting === "price") {
        productList.sort((obj1, obj2) => obj1.price - obj2.price);
    }

    if (sorting === "name") {

        products.sort((obj1, obj2) => {
            if (obj1.name.split(" ")[0].toLocaleLowerCase() < obj2.name.split(" ")[0].toLocaleLowerCase())
                return -1;
            else
                return 1;
        });
    }

    return (
        <div className='app__products'>
            <div className="app__products-sidebar">
                <div className='container-1'>
                    <div className="header">
                        <p>Categories</p>
                        <BsSearch />
                    </div>
                    {accordionData.map((item, index) => (
                        <div key={index}>
                            <Accordion
                                item={item}
                                selectedCategory={selectedCategory}
                                setSelectedCategory={setSelectedCategory}
                            />
                            <hr />
                        </div>
                    ))}
                </div>
                <div className="container-2">
                    <div className="header">
                        <p>Categories</p>
                        <BsSearch />
                    </div>
                    <div className='app__brands'>
                        {brands.map((brand, index) => (
                            <div key={index}>
                                <label className="container">{brand}
                                    <input type="checkbox" />
                                    <span className="checkmark"></span>
                                </label>
                                <hr style={{ width: "215px", marginBottom: "15px" }} />
                            </div>
                        ))}
                        <span>+12 more</span>
                    </div>
                </div>
            </div>

            <div className='app__products-list'>
                <div className="header">
                    <h2>Recommended Wellness Products</h2>
                    <div>
                        <p>Sort by: </p>
                        <select name="choices" onChange={handleChange}>
                            <option value="#">Select</option>
                            <option value="popularity">Popularity</option>
                            <option value="price">Price</option>
                            <option value="name">Name</option>
                            <option value="discount">Discount</option>
                        </select>
                    </div>
                </div>
                <h3>Covid Essentials - {selectedCategory}</h3>
                <div className="grid-container">
                    {products.map((product, index) => (
                        <Product product={product} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Products