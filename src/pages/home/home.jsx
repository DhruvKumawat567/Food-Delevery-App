import  './home.css';
import { useState } from 'react';
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu.jsx';
import Header from '../../components/Header/Header.jsx';
import React from 'react';
import AppDownload from '../../components/AppDownload/AppDownload.jsx';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay.jsx';
const Home = () => {  
  const [category, setCategory] = React.useState('all');
  return (
   <div>
    <Header/>
    <ExploreMenu category={category} setCategory={setCategory}/>
    <FoodDisplay category={category}/>
    <AppDownload/>
    </div>
  );
}
export default Home;