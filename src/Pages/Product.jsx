import React, { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import { useParams } from 'react-router-dom';
import Breadcrum from '../Components/BreadCrums/Breadcrum';
import Productdisplay from '../Components/ProductDisplay/Productdisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import Realtedproduct from '../Components/Realtedproduct/Realtedproduct';

const Product = () => {

  const {all_product} = useContext(Shopcontext);
const {productId} = useParams();
const product = all_product.find((e)=>e.id === Number(productId))


  return (
    <div>
  <Breadcrum  product = {product}/>
  <Productdisplay product= {product}/>
  <DescriptionBox />
  <Realtedproduct />
    </div>
  )
}

export default Product
