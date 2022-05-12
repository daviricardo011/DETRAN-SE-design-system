/*----------------------------------------------------------        DESCRIÇÃO        -------------------------------------------------------- */
//          Componente Breadcrumb, responsável por facilitar a navegação, localizado nos topos das páginas permite aos usuários localizar
//          e acessar as páginas do caminho, relativo ao menu.
// 
//          Possui o aspecto visual de links, separados por ícones de setas para a direita "fa-angle-right". Sendo os anteriores
//          clicáveis e o da página atual desabilitado
//    
//          Parâmetros de entrada:
//              - path: Object. Objeto com as seguintes propriedades:
//                       title: String. Define o texto que aparecerá na tela,
//                       url: String. Geralmente referencia uma url do arquivo "urls.js", para indicar o caminho na rota da respectiva página,
/*------------------------------------------------------------------------------------------------------------------------------------------- */

import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function BreadCrumb({ path }) {

    const BreadcrumbComponent = styled.div`
        margin: 16px 0;
        display: flex;
        flex-direction: row;
    `

    const ArrowRightBreadcrumb = styled.i`
        color: #7B7B7B;
        margin: 0 10px;
    `

    const ActualItemBreadcrumb = styled.p`
        color: #7B7B7B;
    `


    return (
        <BreadcrumbComponent>
            {
                path.map((item, index) => (
                    index + 1 !== path.length
                        ?
                        <p>
                            <Link to={item.url}>{item.title}</Link><ArrowRightBreadcrumb className='fas fa-angle-right' />
                        </p>
                        :
                        <ActualItemBreadcrumb>{item.title}</ActualItemBreadcrumb>
                ))
            }
        </BreadcrumbComponent>
    )
}
