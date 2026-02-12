import './Footer.css';
import React from 'react';
import { assets } from '../../assets/assets';
const Footer = () => {
    return(
    <div className='footer' id='footer'>
        <div className="footerContent">
            <div className="footer-Content-Left">
            <h1>KHALLO.</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam officiis cupiditate quos nobis? Sed hic assumenda exercitationem laboriosam sequi tenetur quos dolores quae dicta!</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="Facebook" />
                <img src={assets.Twitter_icon} alt="Twitter" />
                <img src={assets.linkedin} alt="LinkedIn" />
            </div>
            </div>
            <div className="footer-Content-Center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
            </div>
            <div className="footer-Content-Right">
        <h2>GET IN TOUCH</h2>
        <ul>
            <li>+91899-999-477</li>
            <li>demo@khallo.com</li>
        </ul>
        </div>
        
    </div>
    <hr />
    <p>copyright © 2026 KHALLO. All rights reserved.</p>
    </div>
)
}
export default Footer;