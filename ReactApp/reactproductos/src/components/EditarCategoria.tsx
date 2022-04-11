//import { useParams } from "react-router-dom"
import FormularioCategorias from "./FormularioCategorias";

export default function EditarCategoria()
{
  //  const {id}:any= useParams();
    return(
        <>
                <h3>Editar Categoría</h3>

                {/* <h4>el id es: {id}</h4> */}

                <FormularioCategorias
                modelo={{Nombre:''}}
                onSubmit={async (valores) => {
                    await new Promise(r=>setTimeout(r,300))
                    console.log(valores);
                
            }}          
            />
        </>
    )
}