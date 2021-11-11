import React from 'react'
import { Container } from 'react-bootstrap'

export const ItemListContainer = ( {greeting} ) => {

    return (
        <Container ClasName="my-5">
            <h2>{greeting}</h2>
            <hr/>
        </Container>
    )
}