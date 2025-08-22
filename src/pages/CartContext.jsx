import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

const CartContextProvider = (props)=>{
   const {children} = props;

   const [cartIds,setCartIds] = useState([]);

   const insertToCart = (cartId)=>{
   console.debug(cartId)

    setCartIds([...cartIds, cartId]);
   }

   const values = {
    cartIds,
    insertToCart
   }

   return (<CartContext.Provider value={values}>
    {children}
   </CartContext.Provider>)
}

export default CartContextProvider;


export const useCartContext = ()=>{
    const cartContext = useContext(CartContext);

    if(!cartContext) throw new Error("This is a false report.")

    return cartContext;
}