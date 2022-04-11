import { cliente } from "./cliente.model";
import css from "./clienteindividual.module.css";
export default function ClienteIndividual(props:clienteIndividual){


const link=()=> `/cleinte/${props.cliente.id}`


return(

        <div className={css.div}><a href={link()}>
        <img src={props.cliente.poster} alt="Poster">
            
        </img>
    </a>
    <p><a href={link()}>{props.cliente.titulo}</a></p>
    </div>

)

}

interface clienteIndividual{

    cliente:cliente;
}
