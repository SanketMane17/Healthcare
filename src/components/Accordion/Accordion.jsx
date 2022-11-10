import React, { useEffect, useState } from 'react'
import { BsChevronDown } from "react-icons/bs";
import "./Accordion.scss";

function Accordion({ item, setCategory, subCategory, setSubCategory, filterByCategory }) {
    const [isActive, setIsActive] = useState(false);
    const { title, list } = item;

    const handleClick = (title) => {
        setIsActive(!isActive)
        setCategory(title);
    }

    const handleSubClick = (li) => {
        setSubCategory(li);
    }

    useEffect(() => {
        if (subCategory)
            filterByCategory(subCategory);
    }, [subCategory]);

    return (
        <div className='app__accordion'>
            <div className="app__accordion-item">
                <div
                    className="app__accordion-title"
                    onClick={(e) => handleClick(title)}
                >
                    <div>{title}</div>
                    {isActive ? <BsChevronDown /> : <BsChevronDown className='close-arrow' />}

                </div>
                {isActive && <div className="app__accordion-content">
                    <ul>
                        {list.map((li, index) => (
                            <li key={index}>
                                <a
                                    onClick={() => handleSubClick(li)}
                                    style={subCategory === li ? { color: "rgb(0, 171, 85)" } : {}}
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