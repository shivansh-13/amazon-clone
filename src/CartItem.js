import React from 'react'
import styled from 'styled-components'


function CartItem({ id, item }) {


    let options = []
    for (let i = 1; Math.max(item.quantity + 1, 20); i++) {
        options.push(<option value={i}> Qty:{i}</option>)
    }
    
    return (
        <Container>
            <CartItemImage>
                <img src={item.image} />
            </CartItemImage>
            <CartItemInfo>
                <CartItemInfoTop>
                    <h2>{item.name}</h2>
                </CartItemInfoTop>
                <CartItemInfoBottom>
                    <CartItemQuantityContainer>
                        <select value={item.quantity}>
                            {options}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteButton>
                        delete
                    </CartItemDeleteButton>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
                {item.price}
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
    flefx-grow:1;
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