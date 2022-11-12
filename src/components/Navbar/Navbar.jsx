import React, { useState } from 'react';
import { BsFillCaretDownFill } from "react-icons/bs";
import { AiOutlineShoppingCart } from "react-icons/ai";

import './Navbar.scss';
import Searchbar from '../Searchbar/Searchbar';

const menu = [
    {
        name: 'Lab test',
        list: ['one', 'two', 'three']
    },
    {
        name: 'Consultation',
        list: ['one', 'two', 'three']
    },
    {
        name: 'Subscription',
        list: ['one', 'two', 'three']
    }
]

function Navbar({ hover, setHover, products, setProducts }) {
    const [currTab, setCurrTab] = useState("lab");

    const handleBtn = (e) => {
        setCurrTab(e.target.value);
    }

    const handleClick = (e) => {
        window.location.reload();
    }

    return (
        <nav className="app__navbar">
            <ul className="app__navbar-list">
                {menu.map((item) => (
                    <div
                        className="app__navbar-dropdown"
                        key={item.name}
                        onMouseOver={() => setHover(true)}
                        onMouseLeave={() => setHover(false)}
                    >
                        <button
                            value={item.name.split(" ")[0].toLocaleLowerCase()}
                            onClick={handleBtn}
                            style={currTab === item.name.split(" ")[0].toLocaleLowerCase() ? { color: "#00AB55" } : {}}
                        >
                            {item.name}
                            <BsFillCaretDownFill />
                        </button>
                        <div
                            className="app__navbar-dropdown-content"
                        >
                            {item.list.map(listItem => (
                                <a
                                    href={`#${listItem}`}
                                    key={listItem}
                                    onClick={handleClick}
                                >
                                    {listItem}
                                </a>
                            ))}
                        </div>
                    </div>
                ))}
            </ul>
            <div className="app__navbar-search">
                <Searchbar products={products} setProducts={setProducts} />
            </div>
            <div className="app__navbar-user">
                <AiOutlineShoppingCart className="default-color" />
                <button>Log in</button>
                <button className="signup">Sign up</button>
            </div>
        </nav >
    )
}

export default Navbar