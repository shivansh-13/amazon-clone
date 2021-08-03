// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'

function Product(props) {
    return (
        <Container>
            <Title>
            {props.title}
            </Title>
            <Price>
               {props.prics}
            </Price>
            <Rating>
                {
                    Array(rating)
                }
            </Rating>
            <Image src={props.image} />
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
    color:#B12704;

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