/* eslint-disable no-unused-expressions */
import React, { useState } from 'react'
import './styles.css'
import { Link } from 'react-router-dom'
import { urls } from '../../../main/routes/urls'
import {
    CardContainer, MainTitle, BreadCrumb, SectionContainer, SubTitle,
    InputText, InputSelect,
} from '../../components/web-Components'


export default function ComponentsScreen() {
    const path = [
        {
            title: 'Início',
            url: urls.home,
        },
        {
            title: 'Componentes',
            url: urls.componentsScreen,
        },
        {
            title: 'Breadcrumb',
            url: urls.componentsScreen,
        },
    ]

    const optionsSelectInput = [
        { value: '0', key: '0', label: 'Opção 1' },
        { value: '1', key: '1', label: 'Opção 2' },
        { value: '2', key: '2', label: 'Opção 3' },
        { value: '3', key: '3', label: 'Opção 4' },
        { value: '4', key: '4', label: 'Opção 5' },
    ]


    return (
        <CardContainer>

            <BreadCrumb path={path} />
            <MainTitle title={'Página Inicial'} />
            <SectionContainer title={'Identificação do condutor, permissionário ou candidato'}>

                <SubTitle title={'Preencha todos os campos'} />

                <InputText label={'Input Text'} type={'text'} placeholder={'placeholder'} name={'inputText'} />

                <InputSelect options={optionsSelectInput} label={'Input Select'} placeholder={'Selecione uma opção'} name={'inputText'} />


                <div className='completeCheckInput'>
                    <input type="checkbox" className="checkboxInput" id="checkInput" />
                    <label className='checkboxLabel' for="checkInput">Marque se NÃO deseja receber informações sobre o andamento do processo via e-mail</label>
                </div>

                <div className="completeRadioInput">
                    <label className='radioInputLabel'>Portador de Deficiência</label>
                    <div className="optionsRadioInput">
                        <div>
                            <input className="radioInput" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="radioLabel" for="flexRadioDefault1">
                                Sim
                            </label>
                        </div>
                        <div>
                            <input className="radioInput" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
                            <label className="radioLabel" for="flexRadioDefault2">
                                Não
                            </label>
                        </div>
                    </div>
                </div>

                <div className="completeRadioInput">
                    <label className='radioInputLabel'>Local de Recebimento</label>
                    <div className="optionsLongRadioInput">
                        <div className="optionLongRadioInput">
                            <input className="radioInput" type="radio" name="longRadioDefault" id="longRadioDefault1" />
                            <label className="radioLabel" for="longRadioDefault1">
                                Por meio dos Correios em meu endereço residencial cadastrado anteriormente, mediante o pagamento adicional de R$21,16 pelo serviço.
                            </label>
                        </div>
                        <div className="optionLongRadioInput">
                            <input className="radioInput" type="radio" name="longRadioDefault" id="longRadioDefault2" />
                            <label className="radioLabel" for="longRadioDefault2">
                                Por meio dos Correios em outro endereço, mediante o pagamento adicional de R$21,16 pelo serviço.
                            </label>
                        </div>
                        <div className="optionLongRadioInput">
                            <input className="radioInput" type="radio" name="longRadioDefault" id="longRadioDefault3" />
                            <label className="radioLabel" for="longRadioDefault3">
                                Em um ponto de atendimento do Detran, a ser escolhido abaixo:
                            </label>
                        </div>
                    </div>
                </div>
            </SectionContainer>

            <div className='sectionService'>
                <div className='sectionHeader'>
                    <p className='m-0 sectionTitle'>
                        Botões e modal
                    </p>
                </div>
                <div className='sectionContent'>
                    <div className='completeInput'>
                        <button className='buttonComponent buttonNext buttonForm'>Continuar</button>
                        <button className='buttonComponent buttonBack buttonForm'>Voltar</button>
                        <button className='buttonComponent buttonNext buttonDetail'><i className='fas fa-car' />Ver mais sobre seu veículo</button>


                        <a href="#modalHelp" >
                            <button className='buttonComponent buttonNext buttonHelp'>
                                <i className='fas fa-question-circle helpButtonIcon' />
                                <div>
                                    <p className='helpButtonText'><b>Possui dúvidas?</b></p>
                                    <p className='helpButtonText'>Clique aqui</p>
                                </div>
                            </button>
                        </a>
                    </div>
                    <div id="modalHelp" className="modalHelp">
                        <div className="contentModalHelp">
                            <div className='headerModalHelp'>
                                <p className='titleModalHelp'>Instruções</p>
                                <a href="#fechar" title="Fechar" className="fechar">
                                    <i className='fas fa-times' />
                                </a>
                            </div>
                            <iframe src='https://andrywlima.github.io/webTest/#emitirCRLVe' className='iframeHelpContainer' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='sectionService'>
                <div className='sectionHeader'>
                    <p className='m-0 sectionTitle'> Componentes informativos </p>
                </div>
                <div className='sectionContent'>

                    <div className='infoField'>
                        <div className='infoFieldPosition'>
                            <div className='infoFieldLabel'>
                                <p className='infoFieldLabelText infoFieldLabelTextNormal'>Label</p>
                            </div>
                            <div className='infoFieldContent infoFieldContentNormal'>
                                <p className='infoFieldText'>Clara Ipsum Souza Melo </p>
                            </div>
                        </div>
                    </div>

                    <div className='infoField'>
                        <div className='infoFieldPosition'>
                            <div className='infoFieldLabel'>
                                <p className='infoFieldLabelText infoFieldLabelTextAlert'>Label</p>
                            </div>
                            <div className='infoFieldContent infoFieldContentAlert'>
                                <p className='infoFieldText infoFieldLabelTextAlert'>Clara Ipsum Souza Melo </p>
                            </div>
                        </div>
                    </div>

                    <div className='infoSimpleField'>
                        <label className='infoSimpleFieldLabel'>Forma de Pagamento Selecionada</label>
                        <p className='infoSimpleFieldText'>Ficha de compensação </p>
                    </div>

                    <div>
                        <p className='longText'>
                            Este requerimento foi efetuado com sucesso e a partir deste momento é permitida
                            a emissão do seu comprovante e/ou documento de arrecadação. O comprovante do requerimento é um documento
                            exclusivo do cliente e serve apenas como registro de que o serviço foi solicitado - não será exigido pelo
                            Detran.
                        </p>
                        <p className='longText'>
                            Acompanhe o andamento do seu serviço no menu de OPÇÕES PARA CONTINUAR SERVIÇOS REQUERIDOS do próprio portal.
                            Todos os serviços adicionais também estão disponibilizados, entre eles:
                            cancelamento do serviço, reemissão do documento de arrecadação, alteração dos dados do requerimento de serviço.
                            Por motivos de segurança, o acesso somente será mediante utilização de senha.
                        </p>
                        <p className='longText'>
                            <b>ATENÇÃO:</b> a alteração de dados do requerimento poderá ser efetuada enquanto não houver pagamento ou realização de aulas.
                            O “cancelamento do serviço” somente será permitido enquanto não efetuado o pagamento e a “alteração de dados do requerimento”,
                            enquanto não efetuada a etapa de “IDENTIFICA-SE BIOMETRICAMENTE”.
                        </p>
                    </div>

                    <div className='declarationField'>
                        <label className='declarationFieldLabel'>Declaração de Exercício de Atividade Remunerada</label>
                        <p className='longText'>
                            Declaro saber ler e escrever, atendendo à exigência do art. 140 do Código de Trânsito Brasileiro; Não estar judicialmente impedido de obter o documento de habilitação;
                            Estar ciente que após o recebimento do novo documento terei que inutilizar meu documento de habilitação substituído;
                            E que o contido neste formulário é expressão da verdade, sob as penas do art. 242 do Código de Trânsito Brasileito - CTB, do art. 299 do Código Penal e da Lei Federal 7115/83.
                        </p>
                        <p className='longText'>
                            Estar ciente que após o recebimento do novo documento terei que inutilizar meu documento de habilitação substituído;
                        </p>
                        <p className='longText'>
                            E que o contido neste formulário é expressão da verdade, sob as penas do art. 242 do Código de Trânsito Brasileito - CTB, do art. 299 do Código Penal e da Lei Federal 7115/83.
                        </p>
                        <div className='completeCheckInput'>
                            <input type="checkbox" className="checkboxInput" id="checkInput" />
                            <label className='checkboxLabel' for="checkInput">Li e aceito os termos desta declaração</label>
                        </div>
                    </div>

                </div>
            </div>
        </CardContainer >
    )
}
