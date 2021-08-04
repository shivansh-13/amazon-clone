import React from 'react'
import styled from 'styled-components'


function CartItem() {
    return (
        <Container>
            <CartItemImage>
                <img src={"https://images-na.ssl-images-amazon.com/images/I/41LT40rrSrL.jpg"} />
            </CartItemImage>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>Nike Men's Free Rn 5.0 2020 Running Shoes</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        5
                    </CartItemQuantityContainer>
                    <CartItemDeleteButton>
                        delete
                    </CartItemDeleteButton>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                ₹6,316.00
            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top:12px;
    padding-bottom:12px;
    display:flex;

`
const CartItemImage = styled.div`
    width:180px;
    height:180px;
    flex-shrink:0;
    flex-grow:0;
    margin-right:16px
    display:flex;
    img{
        object-fit:contain;
        width:100%;
        height:100%;
    }
`
const CartItemInfo = styled.div`
`
const CartItemInfoTop = styled.div`
    color:#007185;
    h2{
        font-size:18px;
    }
`
const CartItemInfoBottom = styled.div`
    display:flex;
    margin-top:4px
`
const CartItemQuantityContainer = styled.div`
`
const CartItemDeleteButton = styled.div`
    color:#007185;
    margin-left:16px;
    cursor:pointer;

`
const CartItemPrice = styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px
`