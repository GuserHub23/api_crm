import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Layout from './layout/Layout'

import Inicio from './pages/Inicio'
import NuevoCliente from './pages/NuevoCliente'
import EditarCliente from './pages/EditarCliente'
import VerCliente from './pages/VerCliente'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                {/* El primer Route son las rutas anidadas y los Route que esten adentro de otros Route son las rutas dentro de la sección */}
                <Route path="/clientes" element={<Layout/>}>
                    <Route index element={<Inicio/>}/>
                    <Route path="nuevo" element={<NuevoCliente/>}/>
                    <Route path="editar/:id" element={<EditarCliente/>}/>
                    <Route path=":id" element={<VerCliente/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
