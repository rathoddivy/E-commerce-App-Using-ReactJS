import React, { createContext, useState } from 'react';
import all_product from '../Components/Assets/all_product';
import Item from '../Components/items/Item';

export const Shopcontext = createContext(null);

const getDefultcart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0;  // Ensure IDs are correctly mapped
    });
    return cart;
};


const ShopcontextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefultcart());

    const addTocart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
        console.log(cartItems);
    };

    const Removefromcart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: Math.max(prev[itemId] - 1) })); // Prevents negative values
    };


const getTotalcartAmount = (itemId)=>{
    let totalAmount = 0;
    for(const item in cartItems)

        {
            if(cartItems[item]>0)
            {

                let itemInfo = all_product.find((product)=>product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item];
            }
        
        }
        return totalAmount

}

const getTotalcartitems = () => {

    let totalitem = 0;
    for(const item in cartItems)
    {

        if(cartItems[item] > 0)
        {
            totalitem += cartItems[item];
        }
    }
    return totalitem;
}


    const contextValue = {getTotalcartitems,getTotalcartAmount, all_product, cartItems, addTocart, Removefromcart };

    return <Shopcontext.Provider value={contextValue}>
        
        {props.children}
        
        
        </Shopcontext.Provider>;
};

export default ShopcontextProvider;
