import React from 'react'
import '../Components/hero/Hero'

import Hero from '../Components/hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/offers/Offers'
import NewCollection from '../Components/Collections/NewCollection'
import Newsletter from '../Components/NewsLatter/Newslatter'
import Footer from '../Components/Footer/Footer'

const Shop = () => {
  return (
    <div>
    <Hero />
    <Popular />
    <Offers  />
    <NewCollection />
    <Newsletter />

    </div>
  )
}

export default Shop
