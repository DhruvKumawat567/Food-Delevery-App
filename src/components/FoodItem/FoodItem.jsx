import React from "react";
import './FoodItem.css';
import { assets } from "../../assets/assets.js";
import { StoreContext } from "../../context/StoreContext.jsx";
const FoodItem = ({ id, name, description, image, price }) => {

    const {cartItems,addtoCart,removeFromCart}=React.useContext(StoreContext);
    return (
        <div className="food-item" >
            <div className="food-item-img-container">
                <img className="food-item-image" src={image} alt='' />
                {
                    !cartItems[id]?
                    <button className="add" onClick={() => addtoCart(id)}>+</button>:
                    <div className="item-count-container">
                        <button className="decrease" onClick={() => removeFromCart(id)}>-</button>
                        <span className="item-count">{cartItems[id]}</span>
                        <button className="increase" onClick={() => addtoCart(id)}>+</button>
                    </div>
                }
            </div>
           <div className="food-item-info">
             <div className="food-item-name-rating">
                <p>{name}</p>
                {/* <img src={assets.rating_stars} alt="****" /> */}
            </div>
            <p className='food-item-description'>{description}</p>
            <p className="food-item-price">₹{price}</p>
            </div>
           </div>
           
    )
};

export default FoodItem;