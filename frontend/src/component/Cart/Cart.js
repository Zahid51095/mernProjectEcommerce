import React, { Fragment } from "react";
import "./Cart.css";
import CartItemCard from "./CartItemCard";

const Cart = () => {

  const item = {
    product: "productID",
    price: 200,
    name: "Zahid",
    quantity: 1,
    image: "https://i.ibb.co/DRST11n/1.webp",
  }

  return (
    <Fragment>
      <div className="cartPage">
        <div className="cartHeader">
          <p>Product</p>
          <p>Quantity</p>
          <p>Subtotal</p>
        </div>
        <div className="cartContainer" >
        <CartItemCard item={item}/>
        <div className="cartInput">
          <button>-</button>
          <input type="number" value={item.quantity} readOnly></input>
          <button>+</button>
        </div>
        <p className="cartSubtotal">{`₹${
                    item.price * item.quantity
                  }`}</p>
        </div>
        <div className="cartGrossProfit">
          <div></div>
          <div className="cartGrossProfitBox">
            <p>Gross Total</p>
            <p>{`₹600`}</p>
          </div>
          <div></div>
          <div className="checkOutBtn">
            <button>Check Out</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Cart;
