import React from 'react'
import { useCartContext } from './CartContext'
import { products } from './Products';

const Cart = () => {
  const {cartIds} = useCartContext();

  console.debug({cartIds})

  const myCarts = products.filter(({id})=>cartIds.includes(id));
     
  return (
    <div>
        <h1>Cart</h1>
        {
            myCarts.map(({name})=><>
              <p>{name}</p>
            </>)
        }
    </div>
  )
}

export default Cart