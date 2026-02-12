import React, { useContext } from 'react';
import './Navbar.css';  
import { StoreContext } from '../../context/StoreContext.jsx';
import { useState} from 'react';
import assets from '../../assets/assets';
import Profile from '../proflie/profile.jsx';
import {Link} from 'react-router-dom';
const Navbar = ({setShowlogin,showlogin,user,setUser}) => {
  const [menu, setMenu] = useState('home');
  const {getTotalCartAmount} = useContext(StoreContext);
    return (
        <div className="navbar">
          <Link to="/"><h1 className='logo'>KHALLO.</h1></Link>
           <ul  className='navbar-menu'>
            <Link to="/" onClick={()=>setMenu('home')} className={menu === 'home' ? 'active' : ''}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu('menu')} className={menu === 'menu' ? 'active' : ''}>menu</a>
            <a href='#appDownload' onClick={()=>setMenu('mobile-app')} className={menu === 'mobile-app' ? 'active' : ''}>mobile-app</a>
            <a href='#footer' onClick={()=>setMenu('contact us')} className={menu === 'contact us' ? 'active' : ''}>contact us</a>
           </ul>
            <div className="navbar-right-section">  
            <div className='navbar-right'>
            <img src={assets.search} alt="" />
            <div className='navbar-search-icon'>
          <Link to="/cart"><img className="cart-icon" src={assets.cart} alt="" /></Link>
            <div className={getTotalCartAmount() === 0 ? '': 'dot'}></div>
            </div>
            {
              user
                ? <Profile user={user} setUser={setUser} />
                : <button className="signin-btn" onClick={() => setShowlogin(true)}>Sign In</button>
            }

           </div>
           </div>
         
        </div>  
        );
        }
export default Navbar;