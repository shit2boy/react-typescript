import { Badge, Drawer, Grid, LinearProgress } from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { CartItemType, getProducts, getTotalItems, handleAddTocart, removeFromCart } from "./API";
import Cart from "./components/cart";
import Item from "./components/ItemCard";
import { GlobalStyle, StyledButton, Wrapper } from "./tenancy.styles";

const TenancyAPP = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[]);

  const { data, isLoading, error } = useQuery<CartItemType[]>("product", getProducts);

  if (isLoading) return <LinearProgress />;
  if (error) return <div>Something went wrong</div>;
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Drawer anchor="right" open={isCartOpen} onClose={()=>setIsCartOpen(false)} >
          <Cart cartItems={cartItems} addToCart={handleAddTocart} setCartItems={setCartItems} removeFromCart={removeFromCart} />
        </Drawer>
        <StyledButton onClick={()=>setIsCartOpen(true)}>
          <Badge badgeContent={getTotalItems(cartItems)} color="error">
          <AddShoppingCart/>
          </Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map((item) => (
            <Grid item key={item.id} xs={12} sm={4}>
              <Item item={item} handleAddToCart={handleAddTocart} setCartItems={setCartItems} />
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
};

export default TenancyAPP;
