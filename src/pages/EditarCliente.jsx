import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Formulario from "../components/Formulario"

const EditarCliente = () => {
    const { id } = useParams()

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        setCargando(!cargando)
        const obtenerClienteApi = async () => {
            try {
                const url = `http://localhost:4000/clientes/${id}`
                const respuesta = await fetch(url)
                const resultado = await respuesta.json()
                setCliente(resultado)
            } catch (error) {
                console.log(error)
            }
            setCargando(false)
        }
        obtenerClienteApi()
    }, []);

    return (
        <>
            <h1 className='font-black text-4xl text-blue-900'>
                EDITAR CLIENTE
            </h1>
            <p className='mt-3'>
                Edita los datos de los usuarios
            </p>
            {
                cliente?.nombre ? (
                    <Formulario
                        cliente={cliente}
                        cargando={cargando}
                    />
                ) : <p>Cliente no válido</p>
            }
        </>
    )
}

export default EditarCliente
