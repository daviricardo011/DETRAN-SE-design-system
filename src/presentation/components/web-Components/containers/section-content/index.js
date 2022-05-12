/*----------------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente de seção. Geralmente usado para delimitar formulários e outras informações que são de grupos diferentes, nas páginas
// 
//          Possui um cabeçalho, com um título e o conteúdo, com um padding alinhado ao centro.
//    
//          Parâmetros de entrada:
//              - Title: String. Texto que irá preencher o título da seção.
//              - Children: JSX.Element. Código que definirá o conteúdo da seção.
/*------------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'

export default function SectionContainer({ title, children }) {

    const SectionHeader = styled.div`
        padding: 10px 20px;
        color: #F1F1F1;
        background-color: #0357B6;
        align-items: center;
        border-radius: 3px;
    `
    const SectionTitle = styled.p`
        font-weight: 600;
        font-size: 16px;
        margin: 0;
    `

    const SectionContent = styled.div`
        padding: 10px 20px;
    `


    return (
        <div>
            <SectionHeader>
                <SectionTitle>
                    {title}
                </SectionTitle>
            </SectionHeader>

            <SectionContent>
                {children}
            </SectionContent>
        </div>
    )
}
