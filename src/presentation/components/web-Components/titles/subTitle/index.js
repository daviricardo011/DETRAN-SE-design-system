/*----------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente MainTitle, responsável pelo título principal das páginas.
//          Possui o aspecto visual de um texto maior e em negrito.
//    
//          Parâmetros de entrada:
//              - title: String. Define o texto que aparecerá.
/*------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'

export default function SubTitle({ title }) {

    const InternalTitle = styled.p`
        color: #0357B6;
        font-weight: bold;
        font-size: 20px;
    `

    return (
        <>
            <InternalTitle>
                {title}
            </InternalTitle>
        </>
    )
}
