import React, { useState } from 'react';
import { BsSearch } from "react-icons/bs";
import { Product, Accordion, Rangeslider, Pagination } from '..';
import "./Products.scss";

import { productList } from "../../Data";
import { accordionData } from "../../Data";
import { brands } from "../../Data";

const productsPerPage = 12;

function Products({ products, setProducts }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState("Covid Essentials");
    const [subCategory, setSubCategory] = useState("Covid-19 Preventatives");
    const [sorting, setSorting] = useState("#");
    const [range, setRange] = useState([30, 60]);

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

    // Pagination
    const lastProductIndex = currentPage * productsPerPage;
    const firstProductIndex = lastProductIndex - productsPerPage;
    const currentProducts = products.slice(firstProductIndex, lastProductIndex);

    // Filter by category
    const filterByCategory = () => {
        const newProducts = productList.filter(product => product.category === subCategory)
        setProducts(newProducts);
    }

    // Filter by range
    const filterByRange = () => {
        const newProducts = productList.filter(product => (product.price >= range[0] * 10 && product.price <= range[1] * 10));
        setProducts(newProducts);
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
                                setCategory={setCategory}
                                subCategory={subCategory}
                                setSubCategory={setSubCategory}
                                filterByCategory={filterByCategory}
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
                <div className='container-3'>
                    <div className="header">
                        <p>Price</p>
                        <div>₹{range[0] * 10} - ₹{range[1] * 10}</div>
                    </div>
                    <Rangeslider range={range} setRange={setRange} filterByRange={filterByRange} products={products} />
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
                <div className='app__products-body'>
                    <h3>{category} - {subCategory}</h3>
                    <div className="grid-container">
                        {currentProducts.map((product, index) => (
                            <Product product={product} key={index} />
                        ))}
                    </div>
                </div>
                <div className='app__products-footer'>
                    <Pagination
                        totalProducts={products.length}
                        productsPerPage={productsPerPage}
                        currentPage={currentPage}
                        setCurrentPage={setCurrentPage}
                    />
                </div>
            </div>
        </div>
    )
}

export default Products