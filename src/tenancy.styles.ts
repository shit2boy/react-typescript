import { IconButton } from "@material-ui/core";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
/* html{
  height: 100%

} */
body{
  margin:0;
  font-size: 14px;
  line-height: 18px;
  overflow-x: hidden;
  padding: 10px;
}
*{
    box-sizing: border-box;
    font-family:"catamaran",san-serif;
}

a{
    text-decoration: none;
}

`;
export const Wrapper =styled.div`
margin: 40px;
`
export const StyledButton =styled(IconButton)`
position: fixed;
z-index: 100;
right: 20px;
top: 20px;
`