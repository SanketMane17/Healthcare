import React from 'react'
import images from '../../constants/images';
import "./Offers.scss";

const data = [
    {
        imgLink: images.amazon,
        discount: 70
    },
    {
        imgLink: images.gpay,
        discount: 44
    },
    {
        imgLink: images.medico,
        discount: 60
    }
]

function Offers() {
    return (
        <div className='app__offers'>
            <h1>Offers Just For You &gt;</h1>
            <div className="list">
                {data.map((item, index) => (
                    <div className="item" key={index}>
                        <img src={item.imgLink} alt="amazon" />
                        <div>
                            <p>1st Medicine order</p>
                            <p>{item.discount}% off</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Offers