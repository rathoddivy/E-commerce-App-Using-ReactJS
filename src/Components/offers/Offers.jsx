import React from 'react'
import './offers.css'
import exclusive_img from '../Assets/exclusive_image.png'



const Offers = () => {
  return (
    <div className='offers'>
      <div className="offer_left">
<h1>Exclusive</h1>
<h1>Offers For You</h1>
<p>ONLY ON BEST SELLERS PRODUCTS</p>
<button>Check Now</button>
      </div>
<div className="offer_right">

<img src={ exclusive_img} alt="" />
</div>

    </div>
  )
}

export default Offers
