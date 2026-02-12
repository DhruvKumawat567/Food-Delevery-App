import "./PlaceHolder.css";
import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext.jsx";
const PlaceHolder = () => {
  const { getTotalCartAmount } = useContext(StoreContext);
  return (
    <form className="place-order" onSubmit={(e) => e.preventDefault()}>
        <div className="payment-detail">
      <div className="placeorder-left">
        <p className="title"> Delivery Information</p>
        <div className="multifields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multifields">
          <input type="text" placeholder="Zip code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
      </div>
      <div className="placeorder-right">
        <div className="cart-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cart-total-detail">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cart-total-detail">
              <b>Total</b>
              <b>
                ₹{getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2)}
              </b>
            </div>
          </div>
          <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
      </div>
    </form>
  );
};
export default PlaceHolder;