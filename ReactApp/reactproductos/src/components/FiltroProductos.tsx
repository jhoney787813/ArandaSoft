import { Form, Formik } from "formik";
import Button from "../utils/Button";
import { categoriaDTO } from "./categorias.model";

export default function FiltroProductos()
{
    const  valorInicial:filtroProductosForm=
    {
        nombre:'',
        categoriaId:0

    }

    const categorias: categoriaDTO[]=
            [
                {Id:1, Nombre:'bebidas' },
                {Id:2, Nombre:'alimentos' },
            ]

    return( 
        <>
        <h3>Filtrar Productos</h3>    

                    <Formik initialValues={valorInicial}
                            onSubmit={valores=>
                                console.log(valores)
                            }
                    >

                        {(FormikProps)=>(
                            <Form>
                                <div className="form-inline"> 
                                <div className="from-group mb-2">
                                    <label htmlFor="nombre" className="sr-only">Nombre</label>
                                    <input type='text'
                                        className="form-control" id='nombre'
                                        placeholder="Nombre del producto"
                                        {...FormikProps.getFieldProps('nombre')}
                                    />
                                </div>
                            
                                <div className="form-group ms-sm-3 mb-2">
                                    <select className="form-control"
                                        {...FormikProps.getFieldProps('categoriaId')}>
                                        <option value='0'>--Seleciona una categoría--</option>
                                        {
                                        categorias.map( cat=>
                                            <option key={cat.Id} value={cat.Id} >{cat.Nombre}</option>
                                            )
                                        }
                                    </select>
                                </div>
                                <Button 
                                className='btn btn-primary mb-2 mx-sm-3'
                                onClick={()=>FormikProps.submitForm()}>Filtrar</Button>
                                <Button   
                                className='btn btn-danger mb-2'
                                onClick={()=>FormikProps.setValues(valorInicial)} >Limpiar</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
        </>
    )

}


interface filtroProductosForm{

    nombre:string;
    categoriaId:number;

}