import React, { useContext, useState } from 'react'
import '../NavBar/NavBar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { BrowserRouter, Link, Links, Route, Routes } from 'react-router-dom'
import { Shopcontext } from '../../Context/Shopcontext'

const Navbar = () => {


const [menu , setmenu]= useState("shop");
const {getTotalcartitems} = useContext(Shopcontext);



function countfuction(){
  setcount((prevsum) => prevsum+1)
}

  return (
    <div className='Navbar'>

      <div className="nav-logo">
<img src={logo} alt="" />
<p>Trendify</p>
 </div>

      <div className="nav-menu">
<li onClick={()=> { setmenu("SHOP") }}> <Link style={{textDecoration:'none', color : 'black'}}  to='/'>SHOP</Link>    {menu === "SHOP" ? <hr/> : <></>} </li>
<li onClick={()=> { setmenu("MEN") }}> <Link style={{textDecoration:'none', color : 'black'}} to='/mens'>MEN</Link>   {menu === "MEN" ? <hr/> : <></>}</li>
<li onClick={()=> { setmenu("WOMEN") }}><Link style={{textDecoration:'none' ,color : 'black'}} to='/womens'>WOMEN</Link>  {menu === "WOMEN" ? <hr/> : <></>} </li>
<li onClick={()=> { setmenu("KIDS") }}><Link style={{textDecoration:'none',color : 'black'}} to='/kids'>KID</Link>   {menu === "KIDS" ? <hr/> : <></>} </li>

 </div>



 <div className="nav-login-cart">
<Link to='/Login'><button>Login</button></Link>
<Link to='/cart'><img src={cart_icon} alt="" onClick={countfuction}/></Link>
 
    
    <div className="nav-cart-count" >{getTotalcartitems()}</div>
 </div>




   
    </div>
  )
}

export default Navbar
