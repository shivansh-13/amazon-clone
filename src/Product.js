// import { Container } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import { db } from './firebase';
import NumberFormat from 'react-number-format';

function Product(props) {

    const addToCart = () => {
        const cartItem = db.collection("cartItems").doc(props.id);
        cartItem.get().then((doc) => {
            if (doc.exists) {
                cartItem.update({
                    quantity: doc.data().quantity + 1
                })
            } else {
                db.collection("cartItems").doc(props.id).set({
                    name: props.title,
                    image: props.image,
                    price: props.price,
                    quantity: 1
                })
            }
        })
    }
    return (
        <Container>
            <Title>
                {props.title}
            </Title>
            <Price>
            <NumberFormat value={props.price} displayType={'text'} thousandSeparator={true} prefix={'₹'} />
            </Price>
            <Rating>
                {
                    Array(props.rating)
                        .fill()
                        .map(rating => <p>⭐️</p>)
                }
            </Rating>
            <Image src={props.image} />
            <Actionsection>
                <AddToCartButton onClick = {addToCart}>
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
     display:flex;
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
    cursor:pointer; 
    margin-top:9px;
`