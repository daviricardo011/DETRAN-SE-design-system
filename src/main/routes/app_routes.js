import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {
    Home, ComponentsScreen
} from '../../presentation/screens'
import { Menu } from '../../presentation/components'
// import { Menu } from '../../presentation/components/web-Components'
import { urls } from './urls'


const AppRoutes = () => {
    const user = {
        name: 'Externo',
        listaPermissao: '',
        tipoAcesso: ''
    }
    return (
        <Menu userData={user}>
            {/* <Menu> */}
            <Routes>
                <Route path={`${urls.home}`} element={<ComponentsScreen />} />
                <Route path={`${urls.componentsScreen}`} element={<ComponentsScreen />} />
            </Routes>
        </Menu>
    )
}

export default AppRoutes