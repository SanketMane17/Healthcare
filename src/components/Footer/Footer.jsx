import React from 'react'
import images from '../../constants/images';
import "./Footer.scss";

function Footer() {
    return (
        <div className='app__footer'>
            <div className='section-1'>
                <p>Pharmacy</p>
                <div className="small-ellipse"></div>
                <div className="big-ellipse"></div>
            </div>
            <div className="section-2">
                <p>© 2020 Pharmacy .com All rights reserved.</p>
            </div>
            <div className="section-3">
                <img src={images.facebook} alt="facebook" style={{width: "40px"}} />
                <img src={images.twitter} alt="twitter" style={{width: "48px"}}/>
                <img src={images.linkedin} alt="linkedin" style={{width: "36px"}}/>
            </div>
        </div>
    )
}

export default Footer