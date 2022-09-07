import { useNavigate } from 'react-router-dom'

const Cliente = ({cliente, handleEliminar}) => {
    const navigate = useNavigate()

    const {nombre, empresa, telefono, email, notas, id} = cliente
    

    return (
        <tr className='border-b hover:bg-gray-300'>
            <td className='p-3 font-bold text-gray-600 hover:bg-gray-400'>{nombre}</td>

            <td className='p-3 hover:bg-gray-400'>
                <p>
                    <span className='text-gray-800 uppercase font-bold'>
                        Email: {' '} 
                    </span>
                    {email}
                </p>

                <p className='mt-3'>
                    <span className='text-gray-800 uppercase font-bold'>
                        Teléfono: {' '}
                    </span>
                    {telefono}
                </p>
            </td>
            <td className='p-3 hover:bg-gray-400'>{empresa}</td>
            <td className='p-3 hover:bg-gray-400'>
                <button
                    type='button'
                    className='bg-green-500 hover:bg-green-600 block w-full text-white p-2 uppercase font-bold text-sx'
                    onClick={() => navigate(`/clientes/${id}`)}
                >
                    Ver
                </button>

                <button
                    type='button'
                    className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-sx mt-3'
                    onClick={() => navigate(`/clientes/editar/${id}`)}
                >
                    Editar
                </button>
                <button
                    type='button'
                    className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-sx mt-3'
                    onClick={() => handleEliminar(id)}
                >
                    Eliminar
                </button>
            </td>
        </tr>
    )
}

export default Cliente
