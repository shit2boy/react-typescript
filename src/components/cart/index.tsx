import { Button } from "@material-ui/core"
import { Wrapper } from "./styles"
import {CartItemType} from '../../API'
import CartItem from "../cartItem"
import React from "react"

type Props={
    cartItems:CartItemType[];
    setCartItems:React.Dispatch<React.SetStateAction<CartItemType[]>>;  
    addToCart:(item:CartItemType)=>void;
    removeFromCart:(id:number) => void;
}



const Cart:React.FC<Props> = ({cartItems,setCartItems,addToCart,removeFromCart}) => {
   const calculateTotal = (items: CartItemType[]) => items.reduce((acc:number,item)=>acc + item.amount * item.price,0)
    return (
        <Wrapper>
            <h2>Shoping cart</h2>
            {cartItems.length === 0 ?<p>No items in cart</p> : null }
          {cartItems?.map((item)=><CartItem key={item.id} product={item} addToCart={addToCart} setCartItems={setCartItems} removeFromCart={removeFromCart} />)}  
       <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
        </Wrapper>
    ) 
}

export default Cart
