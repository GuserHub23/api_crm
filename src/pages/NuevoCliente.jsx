import Formulario from '../components/Formulario'

const NuevoClientes = () => {
    return (
        <>
            <h1 
                className='font-black text-4xl text-blue-900'
            >
                NUEVO CLIENTE
            </h1>
            <p
                className='mt-3'
            >
                Llena el formulario para registrar un nuevo cliente.
            </p>
            
            <Formulario/>
        </>
    )
}

export default NuevoClientes
