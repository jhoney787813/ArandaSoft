import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from 'yup';
import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { categoriaCreacionDTO } from "./categorias.model";



export default function FormularioCategorias(props:formularioCategoriasProps)
{


    return(

        <Formik initialValues={props.modelo}
        onSubmit={props.onSubmit }

        validationSchema={Yup.object({
            Nombre: Yup.string().required('Este campo es requerido').primeraLetraMayuscula().
            max(100,'la longitud máxima es de 100 caracteres')
        })}

    >
        {(formikProps) => (
                <Form>
                    <FormGroupText campo="Nombre" label="Nombre" placeholder="Ingrese el nombre de la categoría" />

                    <Button type="submit" disabled={formikProps.isSubmitting}>Salvar</Button>
                    <Link className="btn btn-secondary" to='Categorias'>Cancelar</Link>
                </Form>
            )
        }


    </Formik>

    )
}


interface formularioCategoriasProps
{
    modelo:categoriaCreacionDTO;
    onSubmit(valores:categoriaCreacionDTO, accion:FormikHelpers<categoriaCreacionDTO>):void;
}
