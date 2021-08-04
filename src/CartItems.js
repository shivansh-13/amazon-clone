import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'



function CartItems() {
    return (
        <Container>
            <Title>
                Shopping Cart
            </Title>
            <hr/>
            <ItemsContainer>
                <CartItem/>
            </ItemsContainer>
        </Container>
    )
}

export default CartItems

const Container = styled.div`
    height:300px;
    background-color:white;
    flex:0.8;
    padding:20px;
    margin-right: 18px;
`
const Title = styled.div`
    font-weight: 700;
     font-size: 24px;
`
const ItemsContainer = styled.div`
`