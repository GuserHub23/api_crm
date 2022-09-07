import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Spinner from '../components/Spinner';

const VerCliente = () => {

    const { id } = useParams()

    const [cliente, setCliente] = useState({})
    const [cargando, setCargando] = useState(false)

    const { nombre, empresa, email, telefono, notas } = cliente

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
        cargando ? <Spinner/> :
            Object.keys(cliente).length === 0 ? <p>No ha y Resultados</p> :
                    <div>

                        <h1 className='font-black text-4xl text-blue-900'>
                            Ver Cliente: {nombre}
                        </h1>
                        <p className='mt-3'>
                            Información del cliente
                        </p>

                        {
                            nombre && (
                                <p className='text-4xl text-gray-600 mt-10'>
                                    <span className='text-gray-800 uppercase font-bold'>Cliente: </span>
                                    {nombre}
                                </p>
                            )
                        }
                        {
                            empresa && (
                                <p className='text-2xl text-gray-600 mt-4'>
                                    <span className='text-gray-800 uppercase font-bold'>Empresa: </span>
                                    {empresa}
                                </p>
                            )
                        }
                        {
                            email && (
                                <p className='text-2xl text-gray-600 mt-4'>
                                    <span className='text-gray-800 uppercase font-bold'>Email: </span>
                                    {email}
                                </p>
                            )
                        }
                        {
                            telefono && (
                                <p className='text-2xl text-gray-600 mt-4'>
                                    <span className='text-gray-800 uppercase font-bold'>Teléfono: </span>
                                    {telefono}
                                </p>
                            )
                        }
                        {
                            notas && (
                                <p className='text-gray-600 text-2xl mt-4'>
                                    <span className='text-gray-800 uppercase font-bold'>Notas: </span>
                                    {notas}
                                </p>
                            )
                        }
                    </div>
    )
}

export default VerCliente
