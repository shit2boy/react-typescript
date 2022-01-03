import  Button  from '@material-ui/core/Button'
import React from 'react'
import { ItemCard } from './itemCard.styles'
import {CartItemType} from '../../API'

type Props ={
    item:CartItemType;
    setCartItems: React.Dispatch<React.SetStateAction<CartItemType[]>>  
    handleAddToCart:(clickedItem:CartItemType,callbackFn:any)=>void
}

const Item:React.FC<Props> = ({item,handleAddToCart,setCartItems}) => {
    return (
        <ItemCard>
           <img src={item.image} alt={item.title}/> 
           <div>
               <h3>{item.title}</h3>
               <p>{item.description}</p>
               <h3>{item.price}</h3>
           </div>
           <Button onClick={()=>handleAddToCart(item,setCartItems)}>Add to Cart</Button>
        </ItemCard>
    )
}

export default Item
