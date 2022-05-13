import React from 'react'
import LogoGov from '../../../../main/assets/images/LogoGov.svg'
import Logo from '../../../../main/assets/images/logo-verbose-white.svg'
// import './styles.css'

export default function Menu(props) {
    return (
        <div className='menu'>
            {
                //     {/*========== HEADER ==========*/}

                //     <nav class="navbar navbar-expand-lg fixed-top header navbar-dark">
                //         <div class={"d-flex justify-content-between w-100"}>
                //             <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                //                 <span class="navbar-toggler-icon"></span>
                //             </button>

                //             <img src={Logo} alt="Logo DETRAN-SE" className="logo__Detran" />

                //             <img src={LogoGov} alt="Logo gov" className="header__img responsiveOut" />
                //         </div>
                //     </nav>

                //     {/*========== NAV ==========*/}
                //     <div className="sidebar nav collapse show" id="navbarToggleExternalContent">
                //         <nav className="nav__container">
                //             <div>
                //                 <div className="nav__list">
                //                     <div className="nav__items">
                //                         <div className="nav__dropdown nav__dropdown-extern">
                //                             <a href="#" className="nav__link">
                //                                 <i className="fas fa-car nav__icon" />
                //                                 <h3 className=" nav__subtitle nav__link ">Veículos</h3>
                //                                 <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-extern" />
                //                             </a>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Licenciamento Anual (CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. Arrecadação</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Transferências, Primeiro Emplacamento e Outros Serviços
                //                                             (CRV/CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de recibo de compra e
                //                                                 venda (ATPVE)</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Estampagem/Fabricação de Placas</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de serviço de
                //                                                 estampagem</a>
                //                                             <a href="#" className="nav__dropdown-item">Reemissão da autorização de
                //                                                 estampagem</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Custódia (Diária/Liberação)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão BARRADAS</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão DETRAN</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - sentença judicial</a>
                //                                             <a href="#" className="nav__dropdown-item">Autorização para liberação de
                //                                                 veículo</a>
                //                                             <a href="#" className="nav__dropdown-item">Consulta veículos custodiados</a>
                //                                             <a href="#" className="nav__dropdown-item">Validação de documento eletrônico</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <a href="#" className="nav__link">
                //                                     <span className="nav__name">Pagamento com Cartão de Crédito (parcelamento com
                //                                         juros)</span>
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className="nav__items">
                //                         <div className="nav__dropdown nav__dropdown-extern">
                //                             <a href="#" className="nav__link">
                //                                 <i className="fas fa-id-card nav__icon" />
                //                                 <h3 className=" nav__subtitle nav__link ">Habilitação</h3>
                //                                 <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-extern" />
                //                             </a>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Licenciamento Anual (CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. Arrecadação</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Transferências, Primeiro Emplacamento e Outros Serviços
                //                                             (CRV/CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de recibo de compra e
                //                                                 venda (ATPVE)</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Estampagem/Fabricação de Placas</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de serviço de
                //                                                 estampagem</a>
                //                                             <a href="#" className="nav__dropdown-item">Reemissão da autorização de
                //                                                 estampagem</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Custódia (Diária/Liberação)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão BARRADAS</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão DETRAN</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - sentença judicial</a>
                //                                             <a href="#" className="nav__dropdown-item">Autorização para liberação de
                //                                                 veículo</a>
                //                                             <a href="#" className="nav__dropdown-item">Consulta veículos custodiados</a>
                //                                             <a href="#" className="nav__dropdown-item">Validação de documento eletrônico</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <a href="#" className="nav__link">
                //                                     <span className="nav__name">Pagamento com Cartão de Crédito (parcelamento com
                //                                         juros)</span>
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className="nav__items">
                //                         <div className="nav__dropdown nav__dropdown-extern">
                //                             <a href="#" className="nav__link">
                //                                 <i className="fas fa-exclamation-triangle nav__icon" />
                //                                 <h3 className=" nav__subtitle nav__link ">Infração</h3>
                //                                 <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-extern" />
                //                             </a>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Licenciamento Anual (CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. Arrecadação</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Transferências, Primeiro Emplacamento e Outros Serviços
                //                                             (CRV/CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de recibo de compra e
                //                                                 venda (ATPVE)</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Estampagem/Fabricação de Placas</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de serviço de
                //                                                 estampagem</a>
                //                                             <a href="#" className="nav__dropdown-item">Reemissão da autorização de
                //                                                 estampagem</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Custódia (Diária/Liberação)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão BARRADAS</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão DETRAN</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - sentença judicial</a>
                //                                             <a href="#" className="nav__dropdown-item">Autorização para liberação de
                //                                                 veículo</a>
                //                                             <a href="#" className="nav__dropdown-item">Consulta veículos custodiados</a>
                //                                             <a href="#" className="nav__dropdown-item">Validação de documento eletrônico</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <a href="#" className="nav__link">
                //                                     <span className="nav__name">Pagamento com Cartão de Crédito (parcelamento com
                //                                         juros)</span>
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className="nav__items">
                //                         <div className="nav__dropdown nav__dropdown-extern">
                //                             <a href="#" className="nav__link">
                //                                 <i className="fas fa-handshake nav__icon" />
                //                                 <h3 className=" nav__subtitle nav__link ">Credenciados/Parceiros</h3>
                //                                 <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-extern" />
                //                             </a>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Licenciamento Anual (CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. Arrecadação</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Transferências, Primeiro Emplacamento e Outros Serviços
                //                                             (CRV/CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de recibo de compra e
                //                                                 venda (ATPVE)</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Estampagem/Fabricação de Placas</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de serviço de
                //                                                 estampagem</a>
                //                                             <a href="#" className="nav__dropdown-item">Reemissão da autorização de
                //                                                 estampagem</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Custódia (Diária/Liberação)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão BARRADAS</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão DETRAN</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - sentença judicial</a>
                //                                             <a href="#" className="nav__dropdown-item">Autorização para liberação de
                //                                                 veículo</a>
                //                                             <a href="#" className="nav__dropdown-item">Consulta veículos custodiados</a>
                //                                             <a href="#" className="nav__dropdown-item">Validação de documento eletrônico</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <a href="#" className="nav__link">
                //                                     <span className="nav__name">Pagamento com Cartão de Crédito (parcelamento com
                //                                         juros)</span>
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                     <div className="nav__items">
                //                         <div className="nav__dropdown nav__dropdown-extern">
                //                             <a href="#" className="nav__link">
                //                                 <i className="far fa-id-card nav__icon" />
                //                                 <h3 className=" nav__subtitle nav__link ">CNH Social</h3>
                //                                 <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-extern" />
                //                             </a>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Licenciamento Anual (CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. Arrecadação</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Transferências, Primeiro Emplacamento e Outros Serviços
                //                                             (CRV/CRLV)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Acompanhamento de serviço em
                //                                                 andamento</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão do CRLVe (Documento de
                //                                                 circulação com Certificado de registro de Veículo)</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de busca de processo em
                //                                                 arquivo</a>
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de recibo de compra e
                //                                                 venda (ATPVE)</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Estampagem/Fabricação de Placas</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Solicitação de serviço de
                //                                                 estampagem</a>
                //                                             <a href="#" className="nav__dropdown-item">Reemissão da autorização de
                //                                                 estampagem</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <div className="nav__dropdown nav__dropdown-intern">
                //                                     <a href="#" className="nav__link">
                //                                         <span className="nav__name">Custódia (Diária/Liberação)</span>
                //                                         <i className="bx bx-chevron-down nav__icon nav__dropdown-icon nav__dropdown-icon-intern" />
                //                                     </a>
                //                                     <div className="nav__dropdown-collapse">
                //                                         <div className="nav__dropdown-content">
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão BARRADAS</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - galpão DETRAN</a>
                //                                             <a href="#" className="nav__dropdown-item">Emissão de doc. arrecadação das
                //                                                 diárias - sentença judicial</a>
                //                                             <a href="#" className="nav__dropdown-item">Autorização para liberação de
                //                                                 veículo</a>
                //                                             <a href="#" className="nav__dropdown-item">Consulta veículos custodiados</a>
                //                                             <a href="#" className="nav__dropdown-item">Validação de documento eletrônico</a>
                //                                         </div>
                //                                     </div>
                //                                 </div>
                //                             </div>
                //                             <div className="nav__dropdown-collapse">
                //                                 <a href="#" className="nav__link">
                //                                     <span className="nav__name">Pagamento com Cartão de Crédito (parcelamento com
                //                                         juros)</span>
                //                                 </a>
                //                             </div>
                //                         </div>
                //                     </div>
                //                 </div>
                //             </div>
                //             <a href="#" className="nav__link nav__logout">
                //                 <i className="bx bx-log-out nav__icon" />
                //                 <span className="nav__name">Sair  Grupo: externo  Data: 13/05/2022 01:50</span>
                //             </a>
                //         </nav>
                //     </div>

                //     <div >
                //         {/* <section className='bg-light'> */}
                //         {props.children}
                //         {/* </section> */}
                //     </div>
            }
        </div>

    )
}
