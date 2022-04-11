import { Form, Formik, FormikHelpers } from "formik";
import { clienteCreacionDTO } from "./cliente.model";
import * as Yup from 'yup'
import FormGroupText from "../utils/FormGroupText";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import { categoriaDTO } from "./categorias.model";

export default function FormuloarioClientes(props:formularioClientes)
{

    
    const categorias: categoriaDTO[]=
            [
                {Id:1, Nombre:'bebidas' },
                {Id:2, Nombre:'alimentos' },
            ]

    return(

        <Formik 
        initialValues={props.modelo}
        onSubmit={props.onSubmit}
        validationSchema={ Yup.object({
            nombre:Yup.string().required('Este campo es requerido').primeraLetraMayuscula()

        })} 
        >

            {formikProps=>(
                <Form>
                    <FormGroupText label="Nombre" campo="nombre"/>
                    <FormGroupText label="Descripcion" campo="descripcion"/>
                    <FormGroupImage campo="poster" label='Imagen'
                     imgenURL= {props.modelo.posterURL}/>


                <div className="form-group ms-sm-3 mb-2">
                                                    <select className="form-control"
                                                        {...formikProps.getFieldProps('categoriaId')}>
                                                        <option value='0'>--Seleciona una categoría--</option>
                                                        {
                                                        categorias.map( cat=>
                                                            <option key={cat.Id} value={cat.Id} >{cat.Nombre}</option>
                                                            )
                                                        }
                                                    </select>
                                    </div>

                     
                     <Button disabled={formikProps.isSubmitting} type='submit' >Enviar</Button>
                     <Link className="btn btn-secondary" to='/' >Cancelar</Link>
                     
                    
                </Form>
            )}

        </Formik>

    )
}

interface formularioClientes{

modelo:clienteCreacionDTO;
onSubmit(valores:clienteCreacionDTO,acciones:FormikHelpers<clienteCreacionDTO>):void;
}