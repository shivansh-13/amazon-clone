import React from 'react'
import styled from 'styled-components'

function Home() {
    return (
        <Container>
            <Banner>

            </Banner>

            <Content>

            </Content>
        </Container>
    )
}

export default Home

const Container = styled.div`
 `
const Banner = styled.div`
    background-image: url('https://i.imgur.com/SYHeuYM.jpg');
    min-height:600px;
    background-position:center;
    background-size:cover;
    mask-image: linear-gradient(to bottom, rgba(0, 0, 0, 1.0), rgba(0, 0, 0, 1.0));
`
const Content = styled.div`
`