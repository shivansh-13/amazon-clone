import React from 'react';
import styled from 'styled-components';
import CartItems from './CartItems';
import CartTotal from './CartTotal';

function Cart({ cartItems }) {

    const getTotalPrice = () => {
        let total = 0;
        cartItems.forEach((item) => {
            total += (item.product.price * item.product.quantity)  
        })
        return total;
    }

    const getTotalQuantity = () => {
        let totalq = 0;
        cartItems.forEach((item) => {
            totalq += (item.product.quantity)
        })
        return totalq;
    }
    return (
        <Container>
            <CartItems cartItems={cartItems} />
            <CartTotal getTotalPrice={getTotalPrice} getTotalQuantity={getTotalQuantity} />
        </Container>
    )
}

export default Cart;

const Container = styled.div`
    display:flex;
    margin: 14px 18px 0 18px;
    align-items:flex-start;
    
`