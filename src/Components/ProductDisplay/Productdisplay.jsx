import React, { useContext } from 'react'
import './productdisplay.css'
import star_icon from "../Assets/star_icon.png"
import star_dull_icon from "../Assets/star_dull_icon.png"
import { Shopcontext } from '../../Context/Shopcontext'

const Productdisplay = (props) => {

const {product}   = props;
const {addTocart}= useContext(Shopcontext);



  return (
    <div className='productdisplay'>

<div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
    <img src={product.image} alt="" />
</div>
<div className="productdisplay-img">
    <img className='productdisplay-main-img'  src={product.image} alt="" />
</div>
</div>

<div className="productdisplay-right">
<h1>{product.name}</h1>
    <div className="productdisplay-right-star">
        <img src={star_icon}alt="" />
        <img src={star_icon}alt="" />
        <img src={star_icon}alt="" />
        <img src={star_icon}alt="" />
        <img src={star_dull_icon}alt="" />
        <p>(122)</p>
    </div>

    <div className="productdisplay-right-prices">
        <div className="productdisplay-right-price-old">${product.old_price}</div>
        <div className="productdisplay-right-price-new">${product.new_price}</div>
    </div>
<div className="productdisplay-right-discription">
A lightweight shirt is a versatile and breathable piece of clothing made from thin, soft, and airy fabrics designed for comfort in warm weather. These shirts are typically crafted from materials such as cotton, linen, rayon, polyester blends, or lightweight wool, ensuring excellent ventilation and moisture-wicking properties.


</div>
<div className="productdisplay-right-size">
    <h1>Select Size</h1>
<div className="productdisplay-right-sizes">
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
</div>
<button onClick={ ()=>{addTocart(product.id)}}>ADD TO CART</button>
<p className='productdisplay-right-category'><span>Category : </span> Women , T-shirt ,Crop Top</p>
<p className='productdisplay-right-category'><span>Tags : </span> Modern , Latest </p>
</div>
</div>



    </div>
  )
}

export default Productdisplay