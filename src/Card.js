import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';


function Card({card, cart, newCart }) {
  const [btnClick, setBtnclick] = useState(true);
  return (
  <div className='col'>
    <div className="col-3">  
    <div className="card" style={{width: "18rem", marginTop: "20px"}}>
    <img src={card.image} className="card-img-top" alt="wait a sec"/>
    <div className="card-body">
      <h5 className="card-title text-center">{card.productName}</h5>
      <p className='text-center'><FontAwesomeIcon icon={faStar} style={{ color: "#eccd32" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#eccd32" }} /><FontAwesomeIcon icon={faStar} style={{ color: "#eccd32" }} /></p>
      <p className="card-text text-center"><del>₹{card.notprice}</del>  ₹{card.price}</p>
      <div class="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div class="text-center">
              {btnClick ? (
                <a
                  class="btn btn-outline-light bg-success mt-auto"
                  onClick={() => {
                    setBtnclick(false);
                    newCart(cart + 1);
                  }}
                >
                  Add to cart
                </a>
              ) : (
                <a
                  class="btn btn-outline-light bg-danger mt-auto"
                  onClick={() => {
                    setBtnclick(true);
                    newCart(cart - 1);
                  }}
                >
                  Remove from cart
                </a>
              )}
            </div>
          </div>
    </div>
  </div>
   </div>
   </div>
  
  );
}

export default Card