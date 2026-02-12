 import React from 'react';
import Navbar from './components/Navbar/Navbar';
import { Routes, Route} from 'react-router-dom';
import Loginpopup from './components/loginpopup/Loginpopup.jsx';
import { useState, useEffect } from 'react';
import Home from './pages/home/home';
import Footer from './components/Footer/Footer';
import Cart from './pages/Cart/Cart';
import PlaceHolder from './pages/PlaceHolder/PlaceHolder';
import './App.css';
 const App = () => {
  const[showlogin,setShowlogin]=useState(false);
  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user');
    return savedUser ? JSON.parse(savedUser) : null;
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user');
    }
  }, [user]);
   return (
    <>
  {showlogin ? <Loginpopup setShowlogin={setShowlogin} setUser={setUser} user={user} /> : <></>}
    <div className='app'>
      <Navbar setShowlogin={setShowlogin}
      showlogin={showlogin}
      user={user}
      setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/order' element={<PlaceHolder/>}/>
      </Routes>
     </div>
    <Footer/>
    </>
     
   );
 }
    export default App;