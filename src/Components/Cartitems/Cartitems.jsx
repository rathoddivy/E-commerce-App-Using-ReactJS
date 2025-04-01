import React, { useContext, useEffect } from 'react';
import './Cartitems.css';
import { Shopcontext } from '../../Context/Shopcontext';
import remove_icon from '../Assets/cart_cross_icon.png';
import Item from '../items/Item';

const Cartitems = () => {
    const {getTotalcartAmount, all_product, cartItems, Removefromcart } = useContext(Shopcontext);

    useEffect(() => {
        console.log("Updated Cart Items:", cartItems);
    }, [cartItems]); // Logs cart items whenever they change

    return (
        <div className='cartitems'>
            <div className="cartitem-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />

            {
            all_product?.map((e) => {
              if (cartItems?.[e.id] > 0)
                {
                    return (
                        <div key={e.id} className="cartitem-format-main2">
                            <img src={e.image} alt="" className='carticon-product-icon' />
                            <p>{e.name}</p>
                            <p>${e.new_price}</p>
                            <button className='cartitems-quantity'>{cartItems[e.id]}</button>
                            <p>${e.new_price * cartItems[e.id]}</p>
                            <img className='cartitems-remove-icon'  src={remove_icon} onClick={() => Removefromcart(e.id)} alt="Remove" />
                            <hr />
                        </div>
                    );
                }
              

                return null;
            })}

            <div className="cartitems-down">
<div className="cartitems-total">
<h1> cart Totals</h1>
<div>

    <div className='cartitems-total-item'>
<p>Subtotal</p>
<p>${getTotalcartAmount()}</p>
    </div>
    <hr />
    <div className="cartitems-total-item">
        <p>Shipping Fee</p>
        <p>Free</p>
    </div>
    <hr />
    <div className="cartitems-total-item">
        <h3>total</h3>
        <h3>${getTotalcartAmount()}</h3>
    </div>
</div>

<button>Proceed To CheckOut</button>
</div>
<div className="cartitems-promocode">
    <p>Have a promo code? Enter it here</p>
    <div className="cartitems-promobox">
        <input type="text" placeholder='Promo code' />
        <button>Submit</button>
    </div>
</div>
</div>

        </div>
    );
};

export default Cartitems;
