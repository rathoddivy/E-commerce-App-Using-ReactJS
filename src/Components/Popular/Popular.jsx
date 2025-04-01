import React from 'react'
import '../Popular/Popular.css'
import Item from '../items/Item'  
import data_product from '../Assets/data'

const Popular = () => {
  return (
    <div className='popular'>
      <h1>Popular In Women</h1>
      <hr />
      <div className="popular_item">
        {data_product.map((item, i) => ( 
          <Item 
            key={i} 
            id={item.id}  
            name={item.name} 
            image={item.image} 
            new_price={item.new_price}  
            old_price={item.old_price}  
          />
        ))}
      </div>
    </div>
  )
}

export default Popular
