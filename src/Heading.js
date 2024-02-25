import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'



function Heading({card, cart}) {
  return (
    <div style={{marginTop : "20px"}}><nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="#">Shopping-cart</a>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link disabled" aria-disabled="true">Shop</a>
          </li>
        </ul>
       
          <button class="p-2 btn btn-outline-dark" >  <FontAwesomeIcon icon={faCartShopping} />  cart  <span class="badge bg-danger rectangle-pill" >{cart}</span></button> 
          
      </div>
    </div>
  </nav></div>
  )
}

export default Heading;