/*----------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente de entrada de dados de texto.
//    
//          Parâmetros de entrada:
//              - label: String
//              - type: String. Tipo de input,  (text, email, number, password, search, tel, url)
//              - name: String. Nome para identificação do input
//              - placeholder: String. Define o placeholder do input
//              - value: String. Valor do conteúdo do input
//              - onChange: Function. Define a função que deverá ser chamada ao preencher (ou apagar) dados no input
//              - disabled: Boolean. Define se será um input desabilitado
/*------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'
import { LabelContainer } from '../../'

export default function InputSelect({ label, options = [], placeholder, value, onChange, disabled = false }) {

    const ServiceSelectInput = options.length === 0 || disabled
        ?
        styled.select`
            border: 2px solid #7B7B7B;
            border-radius: 4px;
            height: 40px;
            padding-left: 10px;
        `
        :
        styled.select`
            border: 2px solid #0357B6;
            border-radius: 4px;
            height: 40px;
            padding-left: 10px;
        `

    return (
        <>
            <LabelContainer label={label} disabled={options.length === 0 || disabled}>
                <ServiceSelectInput type="text" disabled={options.length === 0 || disabled} onChange={onChange}>
                    <option>{placeholder}</option>
                    {
                        options.map((item) => (
                            <option value={item.value} key={item.key}>{item.label}</option>
                        ))
                    }
                </ServiceSelectInput>
            </LabelContainer>
        </>
    )
}
