import { Wrapper } from "./styles"
import {CartItemType} from '../../API'
import { Button } from "@material-ui/core"

type Props={
    product:CartItemType;
    setCartItems:React.Dispatch<React.SetStateAction<CartItemType[]>>;
    addToCart:(item:CartItemType,callbackFn:any)=>void;
    removeFromCart:(id:number,callbackFn:React.Dispatch<React.SetStateAction<CartItemType[]>>) => void;
}
const CartItem:React.FC<Props> = ({addToCart,product,setCartItems,removeFromCart}) => {
    return (
        <Wrapper>
          <div>
            <h3>{product.title}</h3>  
            <div className="information">
                <p>Price:$ {product.price}</p>
                <p>Total:$ {(product.price * product.amount).toFixed(2)}</p>
            </div>
            <div className="buttons">
                <Button size="small"
                disableElevation
                variant="contained"
                onClick={()=>removeFromCart(product.id,setCartItems)}>-</Button>
                <p>{product.amount}</p>
                <Button size="small"
                disableElevation
                variant="contained"
                onClick={()=>addToCart(product,setCartItems)}>+</Button>
            </div>
            </div>
            <img src={product.image} alt={product.title}/>
        </Wrapper>
    )
}

export default CartItem
