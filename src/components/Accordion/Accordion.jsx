import React, { useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import "./Accordion.scss";

function Accordion({ item, selectedCategory, setSelectedCategory }) {
    const [isActive, setIsActive] = useState(false);

    const { title, list } = item;

    return (
        <div className='app__accordion'>
            <div className="app__accordion-item">
                <div
                    className="app__accordion-title"
                    onClick={() => setIsActive(!isActive)}
                >
                    <div>{title}</div>
                    {isActive ? <BsChevronDown /> : <BsChevronDown className='close-arrow' />}

                </div>
                {isActive && <div className="app__accordion-content">
                    <ul>
                        {list.map((li, index) => (
                            <li key={index}>
                                <a
                                    href="#"
                                    onClick={() => setSelectedCategory(li)}
                                    style={selectedCategory === li ? { color: "rgb(0, 171, 85)" } : {}}
                                >
                                    {li}
                                </a>
                            </li>
                        ))}</ul>
                </div>}
            </div>
        </div>
    )
}

export default Accordion