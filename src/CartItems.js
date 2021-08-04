import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'



function CartItems({ cartItems } ) {
    return (
        <Container>
            <Title>
                Shopping Cart
            </Title>
            <hr/>
            <ItemsContainer>
            {
                cartItems.map((item)=>(
                    <CartItem
                        id = {item.id}
                        item = {item.product}
                    />
                ))
            }
               
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`

    background-color:white;
    flex:0.8;
    padding:20px;
    margin-right: 18px;
`
const Title = styled.h1 `
    font-weight: 700;
     font-size: 24px;
`
const ItemsContainer = styled.div`
`