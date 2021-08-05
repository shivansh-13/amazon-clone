import React from 'react'
import styled from 'styled-components'
import NumberFormat from 'react-number-format';


function CartItem({ quantity, item }) {

    let options = [] ;
    for (let i = 1 ; i<Math.max(item.quantity + 1, 21) ; i++) {
    options.push(<option value={i}> Qty:{i}</option>)
    };


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
                        <select
                            value={item.quantity}
                        >
                            {options}
                        </select>
                    </CartItemQuantityContainer>
                    <CartItemDeleteButton>
                        Delete
                    </CartItemDeleteButton>
                </CartItemInfoBottom>
            </CartItemInfo>
            <CartItemPrice>
            <NumberFormat value={item.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
            </CartItemPrice>
        </Container>
    )
}

export default CartItem

const Container = styled.div`
    padding-top:12px;
    padding-bottom:12px;
    display:flex;
    border-bottom: 1px solid #DDD;

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
    flex-grow:1;
`
const CartItemInfoTop = styled.div`
    color:#007185;
    h2{
        font-size:18px;
    }
`
const CartItemInfoBottom = styled.div`
    display:flex;
    margin-top:4px;
    align-items:center;
`
const CartItemQuantityContainer = styled.div`
    select{
        border-radius:7px;
        padding:8px;
        background-color:#F0F2F2;
        box-shadow: 0 2px 5px rgba(15,17,15,.15)

        :focus{
            outline:none; 
        }
    }
`
const CartItemDeleteButton = styled.div`
     color:#B12704;
     font-weight:700;
    margin-left:16px;
    cursor:pointer;

`
const CartItemPrice = styled.div`
    font-size:18px;
    font-weight:700;
    margin-left:16px
`