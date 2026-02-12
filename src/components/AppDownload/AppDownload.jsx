import './AppDownload.css';
import React from 'react';
import { assets } from '../../assets/assets';

const AppDownload = () => { 
    return(
    <div className='appDownload' id='appDownload'>
        <p>For Better Experience Download <br /> KHALLO. App </p>
        <div className="app-download-platforms">
            <img src={assets.get_it_on_AS} alt="" />
            <img src={assets.get_it_on_PS} alt="" />
        </div>
    </div>
    )}
    export default AppDownload;
