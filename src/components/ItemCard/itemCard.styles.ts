import styled from "styled-components";

export const ItemCard =styled.div`
display: flex;
align-items: center;
flex-direction: column;
justify-content: space-between;
width:100%;
border: 1px solid lightblue;
border-radius: 20px;
height: 100%;
button{
    border-radius: 0 0 20px 20px;
    width: 100%;

}
img{
    max-height: 200px;
    object-fit: cover;
    /* object-position: 20px 20px 0 0; */
    object-position: center;
    padding-top: 12px;
}
div{
    font-family: Arial, Helvetica, sans-serif;
    padding: 1rem;
    height: 100%;
}

`