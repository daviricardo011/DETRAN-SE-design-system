import React from 'react'
import styled from 'styled-components'

export default function CardContainer(props) {

    const Container = styled.div`
        padding: 20px 20px;
        /* margin: 0px 20px; */
    `


    return (
        <Container className='card'>
            {props.children}
        </Container>
    )
}
