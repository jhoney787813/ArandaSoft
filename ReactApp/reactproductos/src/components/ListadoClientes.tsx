import Cargando from '../utils/Cargando'
import ListadoGenerico from './../utils/ListadoGenerico'
import {cliente} from './cliente.model'
import ClienteIndividual from './ClienteIndividual'
import css from './ListadoCliente.module.css'

export default function ListadoClientes(props:listadoCLientesProps)
{



    return(

        <ListadoGenerico listado={props.clientes} 
        cargandoUI={<>Cargando..</>}
        >
        <div className={css.div}>
            {props.clientes?.map(client=><ClienteIndividual cliente={client}
                                                            key={client.id}/>)
            }
        </div>
        
        </ListadoGenerico>

    )




   
}

interface  listadoCLientesProps{

    clientes?:cliente[]
}