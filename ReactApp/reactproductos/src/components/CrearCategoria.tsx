
import axios from "axios";
import { useHistory } from "react-router-dom";
import {urlCategorias} from '../utils/endpoints';
import { categoriaCreacionDTO } from "./categorias.model";
import FormularioCategorias from "./FormularioCategorias";

export default function CrearCategoria() {
     const history = useHistory();

async function crear (categoria:categoriaCreacionDTO){

    try{
        await axios.post(urlCategorias,categoria);
        history.push('/categorias');

    }catch(error)
    {
        console.error('error al crear:'+ error);
    }
}


    return (

        <>
            <h3> Crear Categoría</h3>
           
            <FormularioCategorias
            modelo={{Nombre:''}}
            onSubmit={async (valores) => {
                await crear(valores);
                
            }}          
            />
        </>

    )
}