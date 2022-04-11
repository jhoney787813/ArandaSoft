import FormuloarioClientes from "./FormularioClientes";
export default function EditarProductos()
{
    return(
        <>
        <h3>Editar Producto</h3>
            <FormuloarioClientes
            modelo={{nombre:'',descripción:'', posterURL:''}}
            onSubmit={valores=>console.log(valores)}
            />
        </>
    )
}