import React from 'react'
import './Realtedproduct.css'
import data_product from '../Assets/data'
import Item from '../items/Item'

const Realtedproduct = () => {
  return (
    <div className='Realtedproducts'>
<h1>Realted products</h1>
<hr />
<div className="Realtedproducts-items">
{data_product.map((item , i)=>{
return <Item key={i} 
id={item.id}  
name={item.name} 
image={item.image} 
new_price={item.new_price}  
old_price={item.old_price} />

})}

</div>

    </div>
  )
}

export default Realtedproduct