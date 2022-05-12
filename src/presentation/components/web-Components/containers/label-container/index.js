/*----------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente de labels. Para ser usado como títulos de inputs e outros campos dentro das seções
//    
//          Parâmetros de entrada:
//              - label: String. Texto que será o titulo
//              - children: JSX.element conteúdo do container
//              - disabled: Boolean. Define se será um campo desabilitado
/*------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'

export default function LabelContainer({ label, children, disabled = false }) {

    const FullLabel = styled.div`
        margin: 20px 0;
        display: flex;
        flex-direction: column;
    `
    const Label = disabled
        ?
        styled.label`
                color : #7B7B7B;
                margin-bottom: 5px;
            `
        :
        styled.label`
                color: #0357B6;
                margin-bottom: 5px;
            `

    return (
        <>
            <FullLabel>
                <Label>{label}</Label>
                {children}
            </FullLabel>
        </>
    )
}
