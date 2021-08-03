import React from 'react';
import styled from 'styled-components';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RoomIcon from '@material-ui/icons/Room';
import { Link } from "react-router-dom";

function Header() {
    return (

        <Container>

            <HeaderLogo>
                <Link to="/">
                    <img src={"https://i.imgur.com/7I9Was5.png"} />
                </Link>
            </HeaderLogo>


            <HeaderOptionAddress>
                <RoomIcon />
                <HeaderOption>
                    <OptionLineOne>Hello</OptionLineOne>
                    <OptionLineTwo>Select your address</OptionLineTwo>
                </HeaderOption>
            </HeaderOptionAddress>


            <HeaderSearch>

                <HeaderSearchInput type='text' />

                <HeaderSearchIconContainer>
                    <SearchIcon />
                </HeaderSearchIconContainer>

            </HeaderSearch>

            <HeaderNavitems>
                <HeaderOptions>
                    <OptionLineOne>Hello,Shivansh</OptionLineOne>
                    <OptionLineTwo>Accounts & Lists</OptionLineTwo>
                </HeaderOptions>

                <HeaderOptions>
                    <OptionLineOne>Return</OptionLineOne>
                    <OptionLineTwo>& Order</OptionLineTwo>
                </HeaderOptions>

                <HeaderOptionCart>
                    <Link to="/cart">
                        <ShoppingCartIcon />
                        <CartCount>
                            4
                        </CartCount>
                    </Link>
                </HeaderOptionCart>


            </HeaderNavitems>



        </Container >

    )
}

export default Header;

const Container = styled.div`
   height: 60px;
   background-color: #0F1111;
   display:flex;
   align-items:center;
   justify-content:space-between;
   color:white;

`

const HeaderLogo = styled.div`
    img{
        width:100px;
        margin-left:11px;
    }
`

const HeaderOptionAddress = styled.div`
    padding-left:12px;
    display:flex;
    align-item:center;
`
const OptionLineOne = styled.div`

`
const OptionLineTwo = styled.div`
    font-weight: 700;
`
const HeaderSearch = styled.div`
    display:flex;
    flex-grow:1;
    height:40px; 
    border-radius:4px;
    overflow:hidden;
    margin-left:5px;
    background-colour:white;
    :focus-within{
        box-shadow:0 0 0 3px #F90;
    }
`
const HeaderSearchInput = styled.input`
    flex-grow:1;
    border:0;
    :focus{
        outline:none;
    }
 `
const HeaderSearchIconContainer = styled.div`
    background-color: #febd69;
    width:45px;
    color:black;
   display:flex;
   justify-content:center;
   align-items:center;
`
const HeaderNavitems = styled.div`
    display:flex;

`
const HeaderOptions = styled.div`
    padding: 10px 9px 10px 9px;
`
const HeaderOptionCart = styled.div`
    display:flex;
    a{
        display:flex;
        align-items:center;
        justify-content:center;
        padding-right:4px;
        color:white;
        text-decoration:none;
    }
`
const HeaderOption = styled.div`
    padding-left:5px;
`
const CartCount = styled.div`
    font-size:13px;
    font-weight:700;
    color:#f08804;
`

