import FormuloarioClientes from "./FormularioClientes";

export default function CrearProductos()
{
    return(
        <>
             <h3> Crear Productos</h3>
             
             <FormuloarioClientes
             modelo={{nombre:'',descripción:'', posterURL:''}}
             onSubmit={valores=>console.log(valores)}
             />
        
        </>
    )
}