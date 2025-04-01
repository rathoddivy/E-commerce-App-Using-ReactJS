import React from 'react'
import Men from '../Components/Categorys/MEN/Men'
import './CSS/ShopCatagory.css'
import { useContext } from 'react'
import { Shopcontext } from '../Context/Shopcontext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item  from '../Components/items/Item'



const Shopcatagory = (props) => {


const {all_product} = useContext(Shopcontext)

  return (
    <div className='shop-category'> 
      
<img src={props.banner} alt="" />

<div className="shopcatagory-indexsort">

  <p>
    <span>Showing 1-12 </span> Out Of 36 Products
  </p>
<div className="shopcatagory-sort">

  Sort By <img src={dropdown_icon} alt="" />
</div>

</div>


<div className="shopcatagory-products">
  {all_product.map((item , i)=>{
if(props.category === item.category){
return <Item key={i} 
id={item.id}  
name={item.name} 
image={item.image} 
new_price={item.new_price}  
old_price={item.old_price}   />
}

else{
  return null;
}
  })}
</div>

<div className="shopcategory-loadmore">
  Explore More
</div>

    </div>
  )
}

export default Shopcatagory
