import React from 'react'
import about from '../../Data/about';
import "./About.scss";

function About() {
    return (
        <div className="app__about">
            {about.map((item, index) => (
                <div key={index}>
                    <h2>{item.title}</h2>
                    <hr />
                    <ul>
                        {item.list.map((li, index) => (
                            <li key={index}>{li}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div >
    )
}

export default About