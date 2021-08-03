// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Product() {
    return (
        <Container>
            <Title>
                2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 128GB) - Space Grey (5th Generation)
            </Title>
            <Price>
                ₹1,13,900.00
            </Price>
            <Rating>
                ⭐️⭐️⭐️⭐️⭐️
            </Rating>
            <Image src='https://images-na.ssl-images-amazon.com/images/I/81sxRBhe2sS._SX679_.jpg' />
            <Actionsection>
                <AddToCartButton>
                    Add To Cart
                </AddToCartButton>
            </Actionsection>
        </Container>
    )
}

export default Product

const Container = styled.div`
    background:white;
    margin: 20px;
    padding:20px;
    display:flex;
    flex-direction:column;
    z-index:100;
    max-height:400px;
    flex:1;
    border-radius: 20px;
`
const Title = styled.span`
`
const Price = styled.span`
    font-weight:500;
    margin-top: 3px;

`
const Rating = styled.div`
`
const Actionsection = styled.div`
    display:grid;
    place-items: center;
    margon-top: 5px;
`
const Image = styled.img`
    max-height:250px;
    object-fit: contain;
`
const AddToCartButton = styled.button`
    width: 100px;
    height: 30px;
    background-color:#f0c14b;
    border: 2px solid #a88734;
    border-radius:2px;
`