import { useState } from 'react'
import './App.css'
import Navbar from './Components/NavBar/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Shop from './Pages/shop'
import Shopcatagory from './Pages/shopcatagory'
import Product from './Pages/Product'
import Cart   from './Pages/Cart'
import Footer from './Components/Footer/Footer'
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kids_banner from './Components/Assets/banner_kids.png'
import LoginSignup from './Pages/loginSignup'


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<Shopcatagory banner= {men_banner} category="men" />} />
          <Route path='/womens' element={<Shopcatagory banner= {women_banner} category="women" />} />
          <Route path='/kids' element={<Shopcatagory banner= {kids_banner} category="kid" />} />
        <Route path='/product' element={<Product/>}>

        <Route path=':productId' element={<Product/>}/>

        </Route>
        <Route path='/cart' element={<Cart/>} />
        <Route path='/Login' element={<LoginSignup/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
