import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';



function CartTotal({ getTotalPrice , getTotalQuantity }) {
    return (
        <Container>
            <Subtotal>Subtotal ({getTotalQuantity()} items) : <NumberFormat value={getTotalPrice()} displayType={'text'} thousandSeparator={true} prefix={'₹'} /></Subtotal>
            <CheckOutButtn>
                Proceed To Checkout
            </CheckOutButtn>
        </Container>
    )
}

export default CartTotal


const Container = styled.h2`
     background-color:white;
     flex :0.3;
     padding:20px;
     border-radius: 20px;
`
const CheckOutButtn = styled.button`
    background-color:#f0c14b;
    margin-top:9px;
    padding:8px;
    border-radius:4px;
    width:100%;
    border:2px solid #a88734;
    cursor:pointer;
    font-size:16px;
    :hover{
        background:#ddb347;
    }
`
const Subtotal = styled.div`
    margin-bottom:16px;
   
`